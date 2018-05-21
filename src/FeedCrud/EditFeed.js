import PouchDB from 'pouchdb';
const db = new PouchDB('rss-feed');

export default function EditFeed(doc) {
    db.put({...doc}, doc.id).then((response) => {
        console.log(response)
    }).catch((err) => {
        console.log(err)
    });
}