# Discord-Tools-Site-With-Authentication
About the project.

This project does check that users are authenticated before accessing the main page.

I created this because I was planning to make a site with a bunch of discord related tools and welp plans changed xD.

You must have nodejs installed to run and use this project.

To install the packages your missing open a cmd from the file directory and run `npm install`.

If you recieve other errors you are probably missing some other packages just be sure to install the missing packages :)

This requires you to have a mongo db you can get that from the instructions below.
[+] Mongo DB Steps [+]

[+] You will need a account over at mongodb link: https://account.mongodb.com/account/login

[+] Once you have done that you will need to open the .env file

[+] After doing this you will need to go into your mongo db and select a free db to deploy.

[+] Once doing that and it has deployed you need to make sure to allow your ip address in the Network Access tab then go to the db you can do that by going down to the security tab once doing this press on the Database access

[+] Once doing that press on the connect button then press the to your application button.

[+] Copy the url it gives you there and paste it in the .env where it says MONGO_URI=yoururlhere

[+] Also go to the config.json and input your mongourl in the "mongourlhere".

[+] In the url exchange the <username>:<password> with the username and password you gave the account access to the db.

[+] In your directory open a cmd and `run npm i`

[+] Once doing that you can start with nodemon in your directory open a cmd and run npm start


[+] Site Previews [+] 

Main Page: 
![image](https://user-images.githubusercontent.com/98126132/187658826-d4e168ff-c1a1-4dbd-ab0c-6242d6b00004.png)

Login Page:
![image](https://user-images.githubusercontent.com/98126132/187658768-2e803f16-3a88-45ca-990f-415e4f57af63.png)

[!] More Info [!]
  
[+] I did not make a page for Signup so you must use postman and make a new user to login.

Enjoy, drop a star for more cool shit <3






