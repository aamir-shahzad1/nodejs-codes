const puppeteer = require('puppeteer');
const $ = require('cheerio');
const url = 'https://www.reddit.com';
const demo5 = function(){
puppeteer
  .launch()
  .then(function(browser) {
    return browser.newPage();
  })
  .then(function(page) {
    return page.goto(url).then(function() {
      return page.content();
    });
  })
  .then(function(html) {
    $('h2', html).each(function() {
      console.log($(this).text());
    });
  })
  .catch(function(err) {
    //handle error
  });
}

module.exports=demo5