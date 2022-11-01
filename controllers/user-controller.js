const { User } = require ('../models');

const userController ={
    //Get all users
    getAllUsers(req,res){
        User.find({})
    }
    //Get single user by its _id and populates thought and friend data
    //Post new user
    //Update a user by _id
    //Delete user by _id
    //Bonus remove a user's associated thoughts when deleted
}