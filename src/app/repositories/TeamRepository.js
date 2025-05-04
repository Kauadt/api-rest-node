import connection from "../database/connection.js"

class TeamRepository {
    create(team) {
        const sql = "INSERT INTO teams SET ?;"
        return new Promise((resolve, reject) => {
            connection.query(sql, team, (error, result) => {
                if (error) return reject('Unable to register')
                const res = JSON.parse(JSON.stringify(result))
                return resolve(res)
            })
        })
    }

    findAll() {
        const sql = "SELECT * FROM teams;"
        return new Promise((resolve, reject) => {
            connection.query(sql, (error, result) => {
                if (error) return reject('Unable to locate')
                const res = JSON.parse(JSON.stringify(result))
                return resolve(res)
            })
        })

    }

    findById(id) {
        const sql = "SELECT * FROM teams WHERE id=?;"
        return new Promise((resolve, reject) => {
            connection.query(sql, id, (error, result) => {
                if (error) return reject('Unable to locate')
                const res = JSON.parse(JSON.stringify(result))
                return resolve(res)
            })
        })
    }

    update(team, id) {
        const sql = "UPDATE teams SET ? WHERE id = ?;"
        return new Promise((resolve, reject) => {
            connection.query(sql, [team, id], (error, result) => {
                if (error) return reject('Unable to update')
                const res = JSON.parse(JSON.stringify(result))
                return resolve(res)
            })
        })
    }

    delete(id) {
        const sql = "DELETE FROM teams WHERE id=?;"
        return new Promise((resolve, reject) => {
            connection.query(sql, id, (error, result) => {
                if(error) return reject(error)
                const res = JSON.parse(JSON.stringify(result))
                return resolve(res)
            })
        })
    }

}

export default new TeamRepository()
