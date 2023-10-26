
"use strict"

/**
 * Handles the public interface with the front-end.  Only routes are specified in this module
 * (with some others in app-auth.js) with suppporting functions abstracted to 'app-functions.js'
 */

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Post = require('./schema/post-model').Post;
const dotenv = require('dotenv').config();
const axios = require('axios').default;
const bigInt = require("big-integer");

if (dotenv.error) {
  console.log(`ERROR from app.js: ${dotenv.error}`);
  process.exit(0);
}

const app = express();

// apply middleware - note setheaders must come first
app.use( (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Headers","Origin, X-Request-With, Content-Type, Accept, Authorization, Content-Disposition");
  res.setHeader("Access-Control-Allow-Methods","GET, POST, PATCH, DELETE, OPTIONS");
  next();
});
app.use(bodyParser.json());
app.use((req, res, next) => {
  console.log(`${req.method}: ${req.originalUrl}`);
  next();
})


// mongo as a service
mongoose.connect(`mongodb+srv://root:${process.env.MONGODB_PASSWORD}@cluster0-5h6di.gcp.mongodb.net/jungfrau?retryWrites=true&w=majority`,
  {useUnifiedTopology: true, useNewUrlParser: true });

mongoose.connection
  .on('error', console.error.bind(console, 'connection error:'))
  .on('close', () => console.log('MongoDB disconnected'))
  .once('open', () => console.log('MongoDB connected') );

app.get('/ping', async (req, res) => {
  res.status(201).json({"hello": "world"});
})

// app.post('/api/save-post', async (req, res) => {
//   const data = req.body;
//   console.log(data);

//   try {
//     const doc = await Post.create(data);
//     res.status(200).json({status: 200});
//   } catch(error) {
//     res.status(500).json({status: 600, error});
//   }

// });


// app.get('/api/get-long-lived-token', async (req, res) => {

//   const httpString = `https://graph.instagram.com/access_token?
//     grant_type=ig_exchange_token
//     &client_secret={instagram-app-secret}
//     &access_token={short-lived-access-token}`

//   https.get(httpString, (result) => {
//     console.log(result.res);
//   }).on('error', (e) => {
//         console.error(e);
//         res.status(500).send('Something went wrong');
//   });

// });


app.get('/api/get-insta-posts/:qty', async (req, res) => {

  try {
    const response = await axios.get(`https://graph.instagram.com/v18.0/me/media?fields=media_url,caption,timestamp,permalink&access_token=${process.env.TEST_USER_TOKEN}`);
    // console.log(response.data.data);
    const mediaArr = response.data.data.map(m => m).slice(0, req.params.qty);
      res.status(201).json( {list: mediaArr} );
  } catch (error) {
    console.error(error)
  }


})



// app.get('/api/feed', async (req, res) => {

//   try {
//     const response = await axios.get(`https://graph.instagram.com/v18.0/instagram_oembed   v18.0/me?fields=media&access_token=${process.env.TEST_USER_TOKEN}`);
//     const mediaArr = response.data.media.data;
//     const id = mediaArr[0].toString();
//     console.log(getInstaShortcode(id));
//     try {
//       console.log(mediaArr[0].id)

//       const response = await axios.get(`https://graph.instagram.com/v18.0/${mediaArr[0].id}?fields=id,media_type,permalink,media_url,username,caption&access_token=${process.env.TEST_USER_TOKEN}`);
//       console.log(response);
//     } catch (err) {
//       console.log(err)
//     }
//   } catch (error) {
//     console.error(error)
//   }


// })



// app.get('/api/get-short-lived-token/:code', async (req, res) => {

//   const httpString = `https://graph.instagram.com/access_token`
//   const postData = {
//     client_id: process.env.APP_ID,
//     client_secret: process.env.APP_SECRET,
//     grant_type: 'authorization_code',
//     redirect_uri: 'https://snorkelology.co.uk/',
//     code: req.params.code
//   };
//   console.log(postData);
//   // const options = {
//   //   hostname: 'https://api.instagram.com/oauth/access_token',
//   //   method: 'POST',
//   //   headers: {
//   //       'Content-Type': 'application/json',
//   //       'Content-Length': Buffer.byteLength(postData),
//   //   },
// // };

//   // const request = http.request(options, (res) => {
//   //   console.log(`STATUS: ${res.statusCode}`);
//   //   console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
//   //   res.setEncoding('utf8');
//   //   res.on('data', (chunk) => {
//   //       console.log(`BODY: ${chunk}`);
//   //   });
//   //   res.on('end', () => {
//   //       console.log('No more data in response.');
//   //   });
//   // });

//   // request.on('error', (e) => {
//   //   console.error(`problem with request: ${e.message}`);
//   // });

//   // request.write(postData);
//   // request.end();


//   axios.post('https://api.instagram.com/oauth/access_token', postData, {
//     headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//         'accept': 'application/json',
//       }})
//     .then(function (response) {
//       console.log(response);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });

//   });


//   function getInstaShortcode(tag) {
//     let id = bigInt(tag.split('_', 1)[0]);
//     const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
//     let remainder;
//     let shortcode = '';

//     while (id.greater(0)) {
//       let division = id.divmod(64);
//       id = division.quotient;
//       shortcode = `${alphabet.charAt(division.remainder)}${shortcode}`;
//     }

//     return shortcode;
//   }

module.exports = app;

