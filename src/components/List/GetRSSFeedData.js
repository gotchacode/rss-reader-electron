export default async term => {
    // for now, the feed is just xml link for feed
    console.log(term);
    return await fetch('https://vinitkumar.me/feed.xml')
      .then((response) => {
        return response.text()
      }).then((xml) => {
        console.log(xml)
        let xmlParse = new DOMParser();
        console.log(xmlParse.parseFromString(xml, 'text/xml'));
        return xml
      }).catch( (error) => {
        console.log(error)
      }) 
};
