
    const rp = require('request-promise');
    const $ = require('cheerio');
    const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';

const demo3 = function(){
rp(url)
  .then(function(html) {
    //success!
    const wikiUrls = [];
    for (let i = 0; i < 45; i++) {
      wikiUrls.push($('big > a', html)[i].attribs.href);
    }
    return Promise.all(
      wikiUrls.map(function(url) {
        return potusParse('https://en.wikipedia.org' + url);
      })
    );
  })
  .then(function(presidents) {
    console.log(presidents);
  })
  .catch(function(err) {
    //handle error
    console.log(err);
  });
}

  function potusParse(url) {
    return rp(url)
      .then(function(html) {
        return {
          name: $('.firstHeading', html).text(),
          birthday: $('.bday', html).text(),
        };
      })
      .catch(function(err) {
        //handle error
      });
  };

module.exports=demo3