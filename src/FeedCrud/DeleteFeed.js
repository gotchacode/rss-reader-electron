import PouchDB from 'pouchdb';

const db = new PouchDB('rss-feed');

export default function DeleteFeed(doc) {
   db.get(doc.id).then((doc) => {
    return db.remove(doc);
   }).catch((err) => {
       console.log(err)
   })
}