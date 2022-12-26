const PORT = process.env.PORT || 8080;
const express = require("express")
const cors = require('cors')
const app = express();
const show = require('./data/shows.js');

app.use(cors())
app.use(express.json())

app.get('/shows', (req, res) => {
    console.log(show);
    setTimeout(() => {
        res.json({
            message: "Successfully get data for " + req.query.date,
            method: req.method,
            url: req.url,
            data: {
                date: req.query.date,
                theatres: show,
            },
        });
    })
});

app.listen(PORT, () => {
    console.log("running on Port 8080")
})
