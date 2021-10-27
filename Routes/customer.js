const {getCust,signup,login,delCust,editCust,getCustById}=require("../Controllers/controllers");
const  router = require('express').Router()




router.get("/getCust", getCust);
router.post("/signup", signup);
router.post("/login", login);
router.delete("/delCust/:id", delCust);
router.put("/editCust/:id", editCust);
router.get("/getCustById/:id", getCustById);





module.exports  = router