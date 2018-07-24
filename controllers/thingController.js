const express = require('express');
const router = express.Router();
const Thing = require('../models/thing')


router.get('/', (req, res) => {
  Thing.find({}, (err, theThings) => {
    res.render('things/index.ejs', {
      things: theThings
    })
  })
})

router.post('/', (req, res) => {
  Thing.create(req.body, (err, createdThing) => {
    res.redirect('/things')
  })
})


router.get('/seed', (req, res) => {
  if(req.session.loggedIn && req.session.username == "admin") {
    const thingsToAddToDb = [
      {
        title: "who",
        done: false
      },
      {
        title: "over",
        done: false
      },
      {
        title: "it",
        done: false
      },
      {
        title: "cookie",
        done: false
      },
      {
        title: "in",
        done: false
      },
      {
        title: "something",
        done: false
      },
      {
        title: "cookie jar",
        done: false
      },
      {
        title: "elephant",
        done: false
      },
      {
        title: "dinosaur",
        done: false
      },
      {
        title: "hawk",
        done: false
      },
      {
        title: "squirrel",
        done: false
      },
      {
        title: "some word",
        done: false
      },
      {
        title: "awesome item",
        done: false
      },
      {
        title: "another thing",
        done: false
      },
      {
        title: "a different thing",
        done: false
      },
      {
        title: "foods",
        done: false
      },
      {
        title: "something else",
        done: false
      },
    ];
    Thing.create(thingsToAddToDb, (err, addedThings) => {
      res.render('home.ejs', {
        message: "Your <code>Thing</code>s got added.",
        messageClass: "good",
        theNumber: 0
      })
    })
  }
  else {
    const data = {
      message: "Insufficient priveleges",
      messageClass: "bad",
      theNumber: 0
    };
    res.render("home.ejs", data);
  }
})


module.exports = router;