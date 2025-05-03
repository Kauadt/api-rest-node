import connection from "../database/connection.js"

class TeamController {

    index(req, res) {
        const sql = "SELECT * FROM teams;"
        connection.query(sql, (error, result) => {
            if (error) {
                res.status(404).json({ "error": error })
                return
            }
            res.status(200).json(result)
        })
    }

    show(req, res) {
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
    }

    store(req, res) {
        const team = req.body
        const sql = "INSERT INTO teams SET ?;"
        connection.query(sql, team, (error, result) => {
            if (error) {
                res.status(404).json({ "error": error })
                return
            }
            res.status(201).json(result)
        })
    }

    update(req, res) {
        const team = req.body
        const id = req.params.id
        const sql = "UPDATE teams SET ? WHERE id = ?;"
        connection.query(sql, [team, id], (error, result) => {
            if (error) {
                res.status(404).json({ "error": error })
                return
            }
            res.status(200).json(result)
        })
    }

    delete(req, res) {
    const id = req.params.id
    const sql = "DELETE FROM teams WHERE id=?;"
    connection.query(sql, id, (error, result) => {
        if (error) {
            res.status(404).json({ "error": error })
            return
        }
        res.status(200).json(result)
    })
}


}

export default new TeamController()