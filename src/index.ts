import express from 'express'
import "dotenv/config"

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log('Server is running on http://localhost:' + PORT)
})

export default app
