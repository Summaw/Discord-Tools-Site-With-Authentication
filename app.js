require("dotenv").config();
require("./config/database").connect();
const path = require('path');
const fetch = require('node-fetch');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const express = require("express");
const User = require("./model/user");
const auth = require("./middleware/auth");
const verify = require("./middleware/verify");
const bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer(); 
var session = require('express-session');
var cookieParser = require('cookie-parser');


const app = express();

app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(upload.array());
app.use(cookieParser());
app.use(session({secret: process.env.TOKEN_KEY}));



app.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname, '/pages/login.html'));
})

app.get("/loggedin", async (req, res) => {
  res.sendFile(path.join(__dirname, '/pages/index.html'));
})

app.get("/dashboard", async (req, res) => {
  res.sendFile(path.join(__dirname, '/pages/index.html'));
})

app.get("/dash", verify, (req, res) => {
  res.send('ok');
});

app.post("/register", async (req, res) => {
    try {
      const { username, password } = req.body;
  
      if (!( username && password)) {
        res.status(400).send("All input is required");
      }
  
      const oldUser = await User.findOne({ username });
  
      if (oldUser) {
        return res.status(409).send("User Already Exist. Please Login");
      }
  
      encryptedPassword = await bcrypt.hash(password, 10);
  
      const user = await User.create({
        username,
        password: encryptedPassword,
      });
  
      const token = jwt.sign(
        { user_id: user._id, username },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
      user.token = token;
  
      res.status(201).json(user);
    } catch (err) {
      console.log(err);
    }
  });

  app.post("/login", async (req, res) => {
    try {
      const { username, password } = req.body;
  
      if (!(username && password)) {
        res.status(400).send("All input is required");
      }
      const user = await User.findOne({ username });
  
      if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign(
          { user_id: user._id, username },
          process.env.TOKEN_KEY,
          {
            expiresIn: "24h",
          }
        );
        user.token = token;
        res.status(200).json(user);

      } else {
      res.status(400).send("Invalid Credentials");
      }
    } catch (err) {
      console.log(err);
    }
  });


app.get("/welcome", auth, (req, res) => {
    res.status(200).send("Welcome 🙌 ");
});

app.post('/profile', auth, async (req,res) => {
    const JWTKEY = process.env.TOKEN_KEY;
    const token = req.body.token || req.query.token || req.headers["x-access-token"];
    console.log(token)
    if (!token) {
		return res.status(401).end()
	}

	var payload, userinfos
	try {
		payload = jwt.verify(token, JWTKEY)
        userinfos = await User.findById(payload.user_id);
        console.log(userinfos);
	} catch (e) {
		if (e instanceof jwt.JsonWebTokenError) {
			return res.status(401).end()
		}
		return res.status(400).end()
	}
});

app.get('/send', async (req, res) => {
  //console.log(req.query.webhook)
  await sendmenow(req, res);
})


async function sendmenow(req, res){
  webhook = req.query.webhook;
  username = req.query.username;
  content = req.query.content;
  titles = req.query.title;
  thumbnail = req.query.thumbnail;
  names = req.query.names;
  value = req.query.value;

      var params = {
          username: `${username}`,
          avatar_url: "",
          content: `${content}`,
          embeds: [
              {
                  "title": `${titles}`,
                  "color": 15258703,
                  "thumbnail": {
                  "url": `${thumbnail}`,
                  },
                  "fields": [
                      {
                          "name": `${names}`,
                          "value": `${value}`,
                          "inline": true
                      }
                  ]
              }
          ]
      }
  
      fetch(`${webhook}`, {
          method: "POST",
          headers: {
              'Content-type': 'application/json'
          },
          body: JSON.stringify(params)
      }).then(res => {
          console.log(res.status);
          if (res.status == 204){
              console.log('Status was a success')
          }
          else if (res.status == 400){
              console.log('Embed failed')
          }
  }) 
}

module.exports = app;