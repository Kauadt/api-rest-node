import app from "./src/app.js"

const PORT = process.env.PORT || 3000

// escutar a porta 3000
app.listen(PORT, ()=>{
    console.log(`App is listening in port ${PORT}`)
})
