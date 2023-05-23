import connection from "./index";

//Because it wraps a callback function in a Promise
//so that we can reuse this function more easily
const query = (qryStr, values) => {
  return new Promise((resolve, reject) => {
    //This .query comes from the mysql2 package
    connection.query(qryStr, values, (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

export default query;
