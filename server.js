const PORT = 8000
const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())

const API_KEY = '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'

app.post('/completions', (req, res) => {
    const options = {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${API_KEY}`
        }
    }
    try {
        fetch('https://api.openai.com/v1/chat/completions', options)
    } catch (error) {
        console.error(error)
    }
})

app.listen(PORT, () => console.log('Your server is running on PORT ' + PORT))