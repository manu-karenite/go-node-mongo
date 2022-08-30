# go-node-mongo

<br />

## Description 📃

- Package to initialise the Backend Project
- Backend Projects allow express and mongoDB as Database

<br />

## Installation

```bash
npm i go-node-mongo
```

<br />

## Importing Package 💻

```js
const goNodeMongo = require("go-node-mongo");
```

<br />

## Sample Snippet

```js
//import mongoose in the file
//npm i mongoose
const mongoose = require("mongoose");
//import go-node-mongo
const goNodeMongo = require("go-node-mongo");

const mongoConnectionString =
  "mongodb://mongodb0.example.com:27017"; /*YOUR LOCALHOST /ATLAS MONGO SRV HERE*/
const app = goNodeMongo(mongoConnectionString, mongoose); //pass URI,mongoose

//use app as server to route..
//example : app.use("/api/v1", SubjectRouter);
```
