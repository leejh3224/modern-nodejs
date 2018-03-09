import express from 'express'

const port = process.env.PORT || 3030
const app = express()

app.listen(port, () => console.log(`listening on port ${port}`))
