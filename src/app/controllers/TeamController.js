import TeamRepository from "../repositories/TeamRepository.js"

class TeamController {

    async index(req, res) {
        const result = await TeamRepository.findAll()
        res.json(result)
    }

    async show(req, res) {
        const id = req.params.id
        const result = await TeamRepository.findById(id)
        res.json(result)
    }

    async store(req, res) {
        const team = req.body
        const result = await TeamRepository.create(team)
        res.json(result)
    }

    async update(req, res) {
        const team = req.body
        const id = req.params.id
        const result = await TeamRepository.update(team, id)
        res.json(result)
    }

    async delete(req, res) {
        const id = req.params.id
        const result = await TeamRepository.delete(id)
        res.json(result)
    }
}

export default new TeamController()
