const {
  getCust,
  custSignup,
  custLogin,
  custDel,
  custEdit,
  getById,
} = require("../Services/service");
const emailValidator = require("email-validator");
module.exports = {
  getCust: (req, res) => {
    getCust((err, results) => {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        res.send(results);
      }
    });
  },

  signup: (req, res) => {
    const body = req.body;
    custSignup(body, (err, results) => {
      if (emailValidator.validate(body.email)) {
       return res.send(body.email + " is a valid email");
      } else {
       return res.send("plz enter valid email");
       
      }
    });
  },

  login: (req, res) => {
    email = req.body.email;
    password = req.body.password;
    custLogin(email, (err, results) => {
      if (err) {
        return res.json({
          message: "Invalid email or password",
        });
      }

      if (!results) {
        return res.json({
          message: "Invalid email or password",
        });
      }

      if (password == results.password) {
        return res.json({
          success: 1,
          message: "login successfully",
        });
      } else {
        return res.json({
          message: "Invalid email or password",
        });
      }
    });
  },
  delCust: (req, res) => {
    custDel(req.params.id, (err, results) => {
      if (err) res.send(err);
      res.json({
        message: "Employee deleted successully!",
      });
    });
  },
  editCust: (req, res) => {
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    const password = req.body.password;
    const phone = req.body.phone;

    custEdit(
      req.params.id,
      { first_name, last_name, email, password, phone },
      (err, results) => {
        if(err)
        res.send(err);
        else
        res.send(results);
      }
    );
  },
  getCustById: (req, res) => {
    getById(req.params.id, (err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.send(results);
      }
    });
  },
};
