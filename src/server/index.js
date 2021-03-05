const dotenv = require('dotenv');
dotenv.config();


const API_KEY='c42671487bfe1d54838001ec879c5b30'
console.log(`Your API key is ${API_KEY}`);

var path = require('path')



const fetch=require('node-fetch') //??
const mockAPIResponse = require('./mockAPI.js')

//const aylien = require('aylien_textapi');




const express = require('express')
const app = express()

//const cors=require('cors')

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('dist'))

console.log(__dirname)


app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.post('/accessapi', async function (req, res){
    const url =req.body.url;
    console.log(url);
    
    const APIURL=`https://api.meaningcloud.com/sentiment-2.1?key=${API_KEY}&lang=en&url=$url$`
    const APIresponse= await fetch(APIURL)
    const data=await APIresponse.json()
    console.log(data)
    res.send(data)
})