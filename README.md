
# Discord-Tools-Site-With-Authentication

This project does check that users are authenticated before accessing the main page.
I created this because I was planning to make a site with a bunch of discord related tools and welp plans changed xD.
You must have nodejs installed to run and use this project.

# Installation

- To install the packages your missing open a cmd from the file directory and type ```npm install```.

- If you recieve other errors you are probably missing some other packages just be sure to install the missing packages.

- This project requires you to have a mongo db you can get that from the instructions below.

- You will need a account over at mongodb [MongoDB]("https://account.mongodb.com/account/login").

- Once you have done that you will need to open the ```.env``` file.

- After doing this you will need to go into your mongo db and select a free db to deploy.

- Once doing that and it has deployed you need to make sure to allow your ip address in the Network Access tab then go to the db you can do that by going down to the security tab once doing this press on the Database access.

- Once doing that press on the connect button then press the to your application button.

- Copy the url it gives you there and paste it in the ```.env``` where it says ```MONGO_URI=yoururlhere```.

- Also go to the config.json and input your mongourl in the "mongourlhere".

- In the url exchange the ```: ```with the username and password you gave the account access to the db.

- In your directory open a cmd and type ```npm i```.

- Once doing that you can start with nodemon in your directory open a cmd and type ```npm start```.

## Demo

Main Page: 
![image](https://user-images.githubusercontent.com/98126132/187658826-d4e168ff-c1a1-4dbd-ab0c-6242d6b00004.png)

Login Page:
![image](https://user-images.githubusercontent.com/98126132/187658768-2e803f16-3a88-45ca-990f-415e4f57af63.png)
