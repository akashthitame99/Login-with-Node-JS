const db = require("../Config/database");
module.exports = {
  custSignup: (data, callBack) => {
    db.query(
      "insert into cust (first_name, last_name, email,password, phone )values( ?,?,?,?,?)",
      [data.first_name, data.last_name, data.email, data.password, data.phone],
      (error, results) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getCust: (callBack) => {
    db.query(
      "select * from cust",

      (error, results) => {
        if (error) {
          console.log(error);
        }
        return callBack(null, results);
      }
    );
  },

  custLogin: (email, callBack) => {
    db.query(
      ` select * from cust where email = ? `,
      [email],
      (error, results) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  custDel: (data, callBack) => {
    db.query(`delete from cust where cust_id= ? `, [data], (error, results) => {
      if (error) {
        callBack(error);
      }
      return callBack(null, results[0]);
    });
  },
  custEdit: (id,data, callBack) => {
    db.query(
      `update cust set first_name=? ,last_name=?,email=?,password=?,phone=? where cust_id=?`,
      [data.first_name, data.last_name, data.email, data.password, data.phone,id],
      (error, results) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getById: ( data,callBack) => {
    db.query(`select * from cust where cust_id=?`, [data], (error, results) => {
      if (error) {
        callBack(error);
      }
      return callBack(null, results[0]);
    });
  },
};
