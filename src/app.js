import express from 'express'
import TeamController from './app/controllers/TeamController.js'

const app = express()

app.use(express.json())

// Routes

app.get('/selecoes', TeamController.index)
app.get('/selecoes/:id', TeamController.show)
app.post('/selecoes', TeamController.store)
app.put('/selecoes/:id', TeamController.update)
app.delete('/selecoes/:id', TeamController.delete)

export default app
