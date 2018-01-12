const express = require('express')
      app = express(),
      MongoController = require('./mongo/MongoController'),
      controller = new MongoController(),
      validate = require('./utils/validate'),
      path = require('path')

app.use(require('body-parser').json())
app.use(express.static('../client/dist'))

// Middleware para erros
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Erro! Algo deu errado...')
})

app.post('/employees', (req, res) => {
    console.log(req.body)

    let json = req.body

    validate.onResult = (employeeValido, msg = 'Erro! Preencha todos os campos!') => {
        if(employeeValido){
            controller.novoEmployee(employeeValido)
            res.send(msg)
        }
        else res.status(500).send({msg})
    }

    validate.validate(json, controller)
})

app.get('/employees', (req, res) => {
    let loader = controller.getEmployees()

    loader.onResult = employees => {
        res.send(JSON.stringify(employees))
    }

    loader.do()
})

app.get('/', (req, res) => 
    res.sendFile(path.join(__dirname, '../client/dist', 'index.html'))
)

controller.onReady = () => {   
    
    app.listen(8080, () => {
        console.log('ouvindo')
    })
}

controller.init()