const Repairs = require("../models/repairs.model");

exports.validRepairById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const repair = await Repairs.findOne({
      where: {
        id,
        status: "pending",
      },
    });
    if (!repair) {
      return res.status(404).json({
        status: "Error",
        message: "The repair was not found ",
      });
    }

    req.repair = repair;
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "Error",
      message: "Internal server error",
    });
  }
};
