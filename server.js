const express = require("express")

const app = express()

const PORT = 4567

app.listen(PORT, ()=> {
    console.log(`Tamo on na porta ${PORT}`);
})