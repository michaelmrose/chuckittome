var express = require('express');
var axios = require('axios')
var router = express.Router();
async function randomJoke (){
   return axios.get("https://api.chucknorris.io/jokes/random").then((x)=>x.data.value).catch((e)=>{
    console.log(e)
    res.render('error')
  })
}



/* GET home page. */
router.get('/', async function(req, res, next) {
  res.render('index', { title: 'Get Chucked'});
})
router.get('/joke', async function(req, res, next) {
  res.render('joke', { title: 'Chuck It To Me', joke: await randomJoke() });
});

module.exports = router;
