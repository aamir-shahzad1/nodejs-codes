
const demo1 = function(){
    const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';

rp(url)
  .then(function(html){
    //success!
    console.log(html)
//     const wikiUrls = [];
//     for (let i = 0; i < 45; i++) {
//       wikiUrls.push($('big > a', html)[i].attribs.href);
//     }
//     console.log(wikiUrls);
  })
  .catch(function(err){
    //handle error
  });

}

module.exports = demo1