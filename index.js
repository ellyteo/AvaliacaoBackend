import express from 'express'
import bancoDeDados from './repository/index.js'

const app = express()

///////////////////////// CREATE
app.get("/api/v1/cachorro", (req, res) => {
    const { id, name } = req.query
    
    if(!id || !name){
        res.send({ message: "Digite um Id e nome existente"})
        return
    }
    
    bancoDeDados.push({ id, name })
    console.log(bancoDeDados)
    
    res.send({ message: "Cachorro adicionado criado com sucesso"})
})

//////////////////////// GET ONE
app.get("/api/v1/cachorro/:id", (req, res) => {
    const id = req.params.id

    const cachorro = bancoDeDados.find(it => it.id == id)

    if(!cachorro) {
        res.send({ message: "Cachorro não encontrado"})
        return
    }

res.send({ message: cachorro })
})

//////////////////////// GET ALL
app.get("/api/v1/cachorros", (req, res) => {
res.send({ message: bancoDeDados })
})

//////////////////////// DELETE
app.get("/api/v1/deletar/:id", (req, res) => {
    const id = req.params.id
    const cachorro = bancoDeDados.find(it => it.id == id)
    
    if(!cachorro) {
        res.send({ message: "Favor informar id" })
        return 
    }

    bancoDeDados.splice(it => it.id == id, 1)
    res.send({ message: "Cachorro deletado com sucesso" })
})

app.listen(3000, () => {

    console.log("Ouvindo na porta 3000")
})