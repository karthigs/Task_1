const express = require('express');
const mongoose = require('mongoose')
const app = express();

//middleware
app.use(express.json());


const {getAllUsers ,postUser,getUser,updateUser,deleteUser} = require('./controller/UserController')

//DB connection
async function connectDB() {
    await mongoose.connect('mongodb://127.0.0.1:27017/task', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    });
}

connectDB();

var router = express.Router();
//Routes
router.get('/users', getAllUsers);
router.post('/post', postUser);
router.get('/user/:id',getUser);
router.put('/user',updateUser);
router.delete('/user',deleteUser);
app.use('/', router);
app.listen(8004, ()=>{
console.log('on 8002');
});

