const express = require("express");

const recordRoutes = express.Router();

const dbo = require("../db/connect");

const ObjectId = require("mongodb").ObjectId;

// <--------------- RECORDS --------------->

// <---------- GET ---------->

recordRoutes.route("/records").get(function (req, res) {
  let db_connect = dbo.getDb("MongoDB");
  db_connect
    .collection("records")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});


recordRoutes.route("/records/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect
    .collection("records")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// <---------- POST ---------->

recordRoutes.route("/records/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    photoLabel: req.body.photoLabel,
    dateTaken: req.body.dateTaken,
    url: req.body.url,
    city: req.body.city,
    country: req.body.country,
    likes: 0,
    liked_users:[],
    user:{
      userName: req.body.user.userName,
      profile_img: req.body.user.profile_img
    }
  };
  db_connect.collection("records").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// <---------- PUT ---------->

recordRoutes.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      photoLabel: req.body.photoLabel,
      dateTaken: req.body.dateTaken,
      url: req.body.url,
      city: req.body.city,
      country: req.body.country,
      likes: req.body.likes,
      liked_users: req.body.liked_users,
      user:{
        userName: req.body.user.userName,
        profile_img: req.body.user.profile_img
      }
    },
  };
  db_connect
    .collection("records")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// <---------- DELETE ---------->

recordRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("records").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

// <--------------- USERS --------------->

// <---------- GET ---------->

recordRoutes.route("/users").get(function (req, res) {
  let db_connect = dbo.getDb("MongoDB");
  db_connect
    .collection("users")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

recordRoutes.route("/users/:email").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { email: req.params.email };
  db_connect
    .collection("users")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});


// <---------- POST ---------->

recordRoutes.route("/users/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
    profile_img: req.body.profile_img,
    liked_posts: []
  };
  db_connect.collection("users").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// <---------- PUT ---------->

recordRoutes.route("/updateUser/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password,
      profile_img: req.body.profile_img,
      liked_posts: req.body.liked_posts
    },
  };
  db_connect
    .collection("users")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

module.exports = recordRoutes;