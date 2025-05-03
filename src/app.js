import express from 'express'
const app = express()

// Indicate to express read the body with JSON 
app.use(express.json())

// mock
const teams = [
    { id: 1, team: "Brasil", group: 'G' },
    { id: 2, team: "Suiça", group: 'G' },
    { id: 3, team: "Camarões", group: 'G' },
    { id: 4, team: "Sérvia", group: 'G' }
]

function findTeamById(id) {
    return teams.filter(team => team.id == id)
}

// Find the index of element in array by ID
function findTeamIndex(id) {
    return teams.findIndex(team => team.id == id)
}

// Create the default route (default --> index)
app.get('/', (req, res) => {
    res.send('Hello, World!')
})

app.get('/selecoes', (req, res) => {
    res.status(200).send(teams)
})

app.get('/selecoes/:id', (req, res) => {
    res.json(findTeamById(req.params.id))
})

app.post('/selecoes', (req, res) => {
    selecoes.push(req.body)
    res.status(201).send('Team resgistered sucessfully!')
})

app.delete('/selecoes/:id', (req, res) => {
    let index = findTeamIndex(req.params.id)
    // Remove from position to position
    teams.splice(index, 1)
    res.send(`Team with ID ${req.params.id} was deleted sucessfully!`)
})

app.put('/selecoes/:id', (req, res) => {
    let index = findTeamIndex(req.params.id)
    teams[index].team = req.body.team
    teams[index].group = req.body.group
    res.json(teams)
})

export default app
