const expres = require('express');
const app = expres();
require('dotenv').config();
require('./models/dbConnection');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

const PORT = process.env.PORT || 4000;

app.get('/',(req,res) => {
    res.send('Hello from auth server');
})

app.use(cors())
app.use('/auth',authRoutes);

app.listen(PORT,() => {
    console.log(`app listen to port ${PORT}`)
})