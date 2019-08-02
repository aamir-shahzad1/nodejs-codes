const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
let axios = require('axios');
links = []
scrapPaper4u = async () => {
  await getAllLinks();
  // console.log(links)
  console.log( links.length )
  for( i=0 ;i<links.length ; i++ ){
    console.log('===================== '  ,i)
    await getDataFromPage(links[i]);
  }
}


getAllLinks = async () => {
  const url = 'https://www.paperpk4u.com/category-1-Government-Jobs-In-Pakistan';
  response=await axios.get(url)
  var html=response.data

  $ = cheerio.load(html, {
    normalizeWhitespace: true,
    xmlMode: true
  });
  $('li.jobdetail').each(function (i, element) {
    var li = $(this).prev();
    // console.log( i,  li.text());
    page_url = 'https://www.paperpk4u.com/' + li.children()[0].attribs.href
    links.push(page_url)
  });
};
//==============================================
getDataFromPage =async (url) => {
  response=await axios.get(url)
  var html=response.data
  $ = cheerio.load(html, {
    normalizeWhitespace: true,
    xmlMode: true
  });
  // $('#footer li').each(function(i, elm) {
  //   // console.log($(this).text()) // for testing do text() 
  //   console.log($(this).find('span').text())
  //   console.log('===========')
  // });

  console.log( $($('#footer li')[0]).find('span').text())
  console.log( $($('#footer li')[1]).find('span').text())
  console.log( $($('#footer li')[2]).find('span').text())
  console.log( $('#footer a')[2].attribs.href)
}

module.exports = scrapPaper4u