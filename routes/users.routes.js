const { Router } = require("express");
const {
  findUsers,
  findUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/users.controllers");
const { validUserById } = require("../middlewares/users.middlewares");

const router = Router();

router.get("/", findUsers);

router.get("/:id", validUserById, findUser);

router.post("/", createUser);

router.patch("/:id", validUserById, updateUser);

router.delete("/:id", validUserById, deleteUser);

module.exports = {
  usersRouter: router,
};
