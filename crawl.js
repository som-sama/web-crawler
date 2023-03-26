const {JSDOM} = require('jsdom');
import fetch from 'node-fetch';

async function crawlPage(currentURL){
    console.log(`actively crawling ${currentURL}`);


    const resp = await fetch(currentURL);

    console.log(resp.text);
}


function getURLsFromHTML(htmlBody, baseURL){
    const urls = []
    const dom = new JSDOM(htmlBody)
    const aElements = dom.window.document.querySelectorAll('a')
    for (const aElement of aElements){
      if (aElement.href.slice(0,1) === '/'){
        try {
          urls.push(new URL(aElement.href, baseURL).href)
        } catch (err){
          console.log(`${err.message}: ${aElement.href}`)
        }
      } else {
        try {
          urls.push(new URL(aElement.href).href)
        } catch (err){
          console.log(`${err.message}: ${aElement.href}`)
        }
      }
    }
    return urls
  }

function normalizeURL(urlString){
    try {
      const urlObj = new URL(urlString);
      const hostPath = `${urlObj.hostname}${urlObj.pathname}`
      if (hostPath.length > 0 && hostPath.slice(-1) === '/'){
          return hostPath.slice(0, -1);
      }
      return hostPath;
    } catch (error) {
      console.error(`Invalid URL: ${urlString}`, error);
      return null; // or any other value that makes sense for your use case
    }
  }


module.exports = {
    normalizeURL,
    getURLsFromHTML,
    crawlPage
}