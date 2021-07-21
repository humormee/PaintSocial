const express = require('express')

const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

const app = express()
app.post('/paintings', upload.single('painting'), (req, res) => {
    res.send("Good Job")
})

app.listen(8080, () => console.log("listening on port 8080"))