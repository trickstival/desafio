const mongo = require('mongodb'),
      MongoClient = mongo.MongoClient,
      url = 'mongodb://localhost:27017/',
      collections = require('./collection/collections')

module.exports = class MongoController {

    init(){
        MongoClient.connect(url, (err, dbField) => {
            if(err) throw err

            const db = dbField.db('db')
            this.db = db
            this.dbField = dbField

            console.log('Database existente')
            this.criarColecoes(db)
            this.onReady()
        })
    }

    onReady(){

    }

    novoEmployee(employee){
        if(!this.dbField) return false

        this.db.collection('participantes').insertOne(employee, (err, res) => {
            if (err) throw err

            console.log('Inserido: ', employee);
        })
    }

    criarColecoes(db){
        console.log('Estabelecendo coleções')

        collections.forEach(collection => {
            db.createCollection(collection, (err, res) => {
                if(err) throw err
            })
        })
    }
}

module.exports.ResultLoader = class ResultLoader {

    constructor(cb){
        this.cb = cb
    }

    do(){
        //cb deve chamar o onResult
        if(this.cb) this.cb()
    }

    onResult(result){

    }
}