const { json } = require("sequelize");
const Repairs = require("../models/repairs.model");

exports.findRepairs = async (req, res) => {
  try {
    const repairs = await Repairs.findAll({
      where: {
        status: "pending",
      },
    });
    return res.status(200).json({
      status: "Success",
      message: "The repairs found successfully ",
      repairs,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "Fail",
      message: "Internal server error",
    });
  }
};

exports.findRepair = async (req, res) => {
  try {
    const { repair } = req;
    return res.status(200).json({
      status: "Success",
      message: "The repair was found successfully",
      repair,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "Fail",
      message: "Internal server error",
    });
  }
};

exports.createRepair = async (req, res) => {
  try {
    const { date, userId } = req.body;

    const newRepair = await Repairs.create({
      date,
      userId,
    });
    res.status(201).json({
      status: "success",
      message: "The repair was created successfully",
      newRepair,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "Fail",
      message: "Internal server error",
    });
  }
};

exports.updateRepair = async (req, res) => {
  try {
    const { repair } = req;
    const { status } = req.body;

    const updateRepair = await repair.update({
      status,
    });
    return res.status(200).json({
      status: "Success",
      message: "The repair has been updatred successfully",
      updateRepair,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "Fail",
      message: "Internal server error",
    });
  }
};

exports.deleteRapair = async (req, res) => {
  try {
    const { repair } = req;
    await repair.update({ status: "cancelled" });
  } catch (error) {
    return res.status(500).json({
      status: "Fail",
      message: "Internal server error",
    });
  }
};
