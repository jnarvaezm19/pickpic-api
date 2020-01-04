## PickPic-API ##
This app contain the methods and functions to add, delete, update, list and find Albums or Images in the database.

Based on Node js.
Data base used is MongoDB.

## How it Works? ##
The app is an API RestFul, in this you can access to any method or function through the especified URL descrive in each one.  


## How to install
Steps:
1. you have to clone the repository:
##### `git clone https://github.com/jnarvaezm19/pickpic-api.git`
2. enter to project folder
##### `cd pickpic-api`
3. then you must to install all dependencies
##### `npm install`
4. Create the environment file
#### `echo 'DB_CONNECTION = mongodb+srv://user:password@condor-4bxf6.azure.mongodb.net/test?retryWrites=true&w=majority' >.env`

## How to run ##
Locate into the app folder then execute:
##### `npm start`
 
#### Implemented Libraries ####
>Express
>Mongoose
>bodyParser

Versions:
body-parser: 1.19.0
cloudinary: 1.18.1
cors: 2.8.5
dotenv: 8.2.0
express: 4.17.1
mongoose: 5.8.3
nodemon: 2.0.2

The database is already running in a free MongoDB's cluster (is not neccesary install a database, you can use this)


## Issues Found ##
At the moment to test the installation before send you, I had a problem running the conection with the data base, because the cluster doesn't permit the connection in other Ip address. So I had to habilitate the access to all Ips in the cluster.

### Anotations ###
This is also my first NodeJs app, but I felt so good develop this API RestFul App because this is a simple, useful and good technology to do this kind of app. 
So.. why NodeJs? I choose NodeJs to develop this API RestFul app because also is a popular technology and further you actually use that, even you wrote in the "Play rules" that "for the
backend test, we are looking for javascript developers, so if you choose to use node, that
might add up some extra points.", so I accepted your technical test but also I set a challange to me and thats was make this technical test in this technology to show me that I can do whatever challange, obviously I have a lot of thing to improve.
