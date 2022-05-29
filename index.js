//js
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config({ path: './sample.env' });

//mongo
const database = process.env.MONGLAB_URI;
mongoose.connect(database, {useUnifiedTopology: true, useNewUrlParser: true })
.then(() => console.log("db connected"))
.catch(err => console.log(err))

app.set('view engine', 'ejs')

//routes
app.use('/', require('./routes/login'));
const PORT = process.env.PORT || 4111;
app.listen(PORT, console.log("Server don start for port: " + PORT + database))
