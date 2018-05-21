import PouchDB from 'pouchdb';
const db = new PouchDB('rss-feed');

export default function AddFeed(doc) {
  db.post({...doc}).then((response) => {
    console.log(response);
  }).catch((err) => {
    console.log(err);
  })
};
