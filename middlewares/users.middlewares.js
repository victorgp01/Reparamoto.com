const Users = require("../models/users.model");

exports.validUserById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await Users.findOne({
      where: {
        id,
        status: "available",
      },
    });
    if (!user) {
      return res.status(404).json({
        status: "Error",
        message: "The User was not found ",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "Error",
      message: "Internal server error",
    });
  }
};
