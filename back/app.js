require('dotenv').config()
const express = require('express')
const cors = require('cors')
const notFound = require('./middlewares/notFound')
const errorMiddleware = require('./middlewares/error')
const authRoute = require('./routes/auth-route')
// const productRoute = require('./routes/product-route') // เปลี่ยนชื่อเส้นทางจาก todo-route เป็น product-route

const app = express()

app.use(cors())
app.use(express.json())

// service
app.use('/auth', authRoute)
// app.use('/products', productRoute) // เปลี่ยนเส้นทางจาก '/todos' เป็น '/products'

// notFound
app.use(notFound)

// error
app.use(errorMiddleware)

let port = process.env.PORT || 8000
app.listen(port, () => console.log('Server on Port:', port))
