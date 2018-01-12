const app = require('express')(),
      mongoController = require('./mongo/main')

mongoController.init()

app.get('/')