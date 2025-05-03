import express from 'express'
import connection from '../infra/connection.js'
const app = express()

// Indicate to express read the body with JSON 
app.use(express.json())

function findTeamById(id) {
    return teams.filter(team => team.id == id)
}

// Find the index of element in array by ID
function findTeamIndex(id) {
    return teams.findIndex(team => team.id == id)
}

// Routes

app.get('/selecoes', (req, res) => {
    const sql = "SELECT * FROM teams;"
    connection.query(sql, (error, result) => {
        if (error) {
            res.status(404).json({ "error": error })
            return
        }
        res.status(200).json(result)
    })
})

app.get('/selecoes/:id', (req, res) => {
    const id = req.params.id
    const sql = "SELECT * FROM teams WHERE id=?;"
    connection.query(sql, id, (error, result) => {
        const row = result[0]
        if (error) {
            res.status(404).json({ "error": error })
            return
        }
        res.status(200).json(row)
    })
})

app.post('/selecoes', (req, res) => {
    const team = req.body
    const sql = "INSERT INTO teams SET ?;"
    connection.query(sql, data, (error, result) => {
        if (error) {
            res.status(400).json({ "error": error })
            return
        }
        res.status(201).json(result)
    })
})

app.delete('/selecoes/:id', (req, res) => {
    const id = req.params.id
    const sql = "DELETE FROM teams WHERE id=?;"
    connection.query(sql, id, (error, result) => {
        if (error) {
            res.status(404).json({ "error": error })
            return
        }
        res.status(200).json(result)
    })
})

app.put('/selecoes/:id', (req, res) => {
    const team = req.body
    const id = req.params.id
    const sql = "UPDATE teams SET ? WHERE id = ?;"
    connection.query(sql, [team, id], (error, result) => {
        if (error) {
            res.status(400).json({ "error": error })
            return
        }
        res.status(200).json(result)
    })
})

export default app
