import PouchDB from 'pouchdb';
const db = new PouchDB('rss-feed');

export default function AddFeed(doc) {
  console.log('saving doc', doc);
  db.post({...doc }).then((response) => {
    console.log('saving doc', response);
  }).catch((err) => {
    console.log(err);
  })
};
