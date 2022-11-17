const { Router } = require("express");
const { userController } = require("../controllers/users.conteroller")
const router = Router();
router.get("/user", userController.getUser);
router.post("/user", userController.addUser);
router.patch("/user/:userId", userController.rentBoock);
router.patch("/user/:userId/retern",userController.returnBoock)

module.exports = router;
