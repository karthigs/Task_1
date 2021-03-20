const User = require('../user/user');


//Get Method

const getAllUsers = async(req, res) => {
    const users = await User.find({});
    res.json({users:users});
};

const getUser = async(req, res) => {
    const user = await  User.findOne({_id:req.params.id});
    res.json({user:user});
}
//Post Method
const postUser = async (req, res) => {

    const data = req.body;

    const user = new User(data);
    user.save((error, result) => {
        if (error) {
            res.json({status:false});
        } else {
            res.json({status:true});
        }
    });
}

//Put Method
const updateUser = async(req,res) =>{
    user.save((error, result) => {
        if (error) {
            res.json({status:false});
        } else {
            res.json({status:true});
        }
    });
}

module.exports = { getAllUsers,postUser,getUser,updateUser};

/*app.delete('/book/:isbn', (req, res) => {
    // Reading isbn from the URL
    const isbn = req.params.isbn;

    // Remove item from the books array
    books = books.filter(i => {
        if (i.isbn !== isbn) {
            return true;
        }
        return false;
    });

    res.send('Book is deleted');
});*/