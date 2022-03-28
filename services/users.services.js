const User = require('../models/users.models.js');

exports.getUsers = async function () {

    return await User.find();
}

exports.getUserById = async function (id) {

    return await User.findById(id).exec();
}

exports.getUserByEmail = async function (email) {

    return await User.findOne({email: email}).populate('role').exec();
}

exports.createUser = async function (userObject) {

    return await User.create(userObject);
}

exports.updateUser = async function (id, userObject) {
    
    console.log(id);

    let user = await User.findById(id);

    user.name = userObject.name;
    user.lastName = userObject.lastName;
    user.email = userObject.email;
    user.role = userObject.role;

    if (userObject.password) {

        user.password = userObject.password;
    }

    user.save();

    return user;
}

exports.deleteUser = async function (id) {

    return await User.findByIdAndDelete(id);
}