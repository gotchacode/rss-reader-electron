import PouchDB from 'pouchdb';
const db = new PouchDB('rss-feed');

const AllFeed = async function() {
    return await db.allDocs({include_docs: true}).then((response) => {
        console.log('getting response', response);
        return response.rows;
    }).catch((err) =>{
        console.log(err);
    })
};

export default AllFeed;