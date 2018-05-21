import PouchDB from 'pouchdb';
const db = new PouchDB('rss-feed');

export default function AllFeed() {
    db.allDocs().then((response) => {
        console.log(response);
    }).catch((err) =>{
        console.log(err);
    })
}