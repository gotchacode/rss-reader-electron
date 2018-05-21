export default async term => {
    // for now, the feed is just xml link for feed
    console.log(term);
    let url = '';
    if (term) {
      url = term
    } else {
      url ='https://vinitkumar.me/feed.xml'
    }
    console.log('inside GetRSSFeedData', url);
    return await fetch(url)
      .then((response) => {
        console.log(response)
        return response.text()
      }).then((xml) => {
        let xmlParse = new DOMParser();
        console.log(xmlParse.parseFromString(xml, 'text/xml'));
        return {type: 'data', data: xmlParse.parseFromString(xml, 'text/xml')}
      }).catch( (error) => {
        return { type: 'error', data: error}
      })
};
