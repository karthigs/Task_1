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

const updateUser = async (req, res) => {

    const user = await User.findOneAndUpdate({_id:req.body._id}, {$set:req.body},{new:true});
    res.json({user:user});
}

//Delete Method

const deleteUser = async (req, res) => {
   const user = await User.findOneAndRemove({_id:req.body._id});
    res.json({user:user});
}

module.exports = { getAllUsers,postUser,getUser,updateUser,deleteUser};

