const { json } = require("sequelize");
const Users = require("../models/users.model");

exports.findUsers = async (req, res) => {
  try {
    const users = await Users.findAll({
      where: {
        status: "available",
      },
    });
    return res.status(200).json({
      status: "Success",
      message: "The users found successfully ",
      users,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "Fail",
      message: "Internal server error",
    });
  }
};

exports.findUser = async (req, res) => {
  try {
    const { user } = req;

    return res.status(200).json({
      status: "Success",
      message: "The user was found successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "Fail",
      message: "Internal server error",
    });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const newUser = await Users.create({
      name,
      email,
      password,
      role,
    });
    res.status(201).json({
      status: "success",
      message: "The user was created successfully",
      newUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "Fail",
      message: "Internal server error",
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { user } = req;
    const { name, email } = req.body;

    const updateUser = await user.update({
      name,
      email,
    });
    return res.status(200).json({
      status: "Success",
      message: "The user has been updatred successfully",
      updateUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "Fail",
      message: "Internal server error",
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { user } = req;

    await user.update({ status: "disabled" });
  } catch (error) {
    return res.status(500).json({
      status: "Fail",
      message: "Internal server error",
    });
  }
};
