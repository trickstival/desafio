const mongo = require('mongodb'),
      MongoClient = mongo.MongoClient,
      url = 'mongodb://localhost:27017/db',
      collections = require('./collections')

module.exports = {
    init(){
        MongoClient.connect(url, (err, db) => {
            if(err) throw err
        
            console.log('Database existente')
            db.close()
        })
    }
}
