require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ Conectado a MongoDB Atlas'))
    .catch((err) => console.error('❌ Error de conexión:', err))

app.get('/', (req, res) => {
    res.send('🚀 Backend funcionando')
})

app.listen(PORT, () => {
    console.log(`📡 Servidor escuchando en http://localhost:${PORT}`)
})

