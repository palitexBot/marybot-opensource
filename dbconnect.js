const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://C0de:marydb@cluster0.fsjad.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log('MongoDB Conectado com sucesso!')
})