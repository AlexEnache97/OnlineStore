import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRouters.js'
import orderRoutes from './routes/orderRoutes.js'
import Product from './models/productModel.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

dotenv.config({ override: true })

connectDB()

const { NODE_ENV } = process.env

const app = express()

//accept json data in the body
app.use(express.json())

app.get('/', (req, res) => {
	res.send('API is running...')
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)

app.get('/api/config/paypal', (req, res) =>
	res.send(process.env.PAYPAL_CLIENT_ID)
)

app.use(notFound)

//error middleware
app.use(errorHandler)

const PORT = process.env.PORT || 3000

app.listen(
	PORT,
	console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`.yellow.bold)
)
