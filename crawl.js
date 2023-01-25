function normalizeURL(urlString){
    const URLObject = new URL(urlString)
    //parsing the URL
    const hostPath =  `${URLObject.hostname}${URLObject.pathname}` 
    if(hostPath.length > 0 && hostPath.slice(-1) === '/'){
        return hostPath.slice(0,-1)
    }
    return hostPath
}

module.exports = {
    normalizeURL
}