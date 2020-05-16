require("dotenv").config();
const express = require("express");
const path = require("path");
const router = require("express")
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 8080;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

app.use(morgan('dev'));

//send message
app.post("/mail", (req, res) => {
    var apiKey = process.env.mg_key;
    var domain = 'sandbox48e185d300ab4e5ca39b0bfe8bfbbb44.mailgun.org';
    var mailgun = require('mailgun-js')({ apiKey, domain });
const {from, subject, text} = req.body
    var data = {
        from,
        to: 'nawuerz@gmail.com',
        subject,
        text
    };

    mailgun.messages().send(data, function (error, body) {
        console.log(error, body)
        if (error){
            throw error;
        }
        res.status(200).json(body);
    });
});

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

app.listen(PORT);