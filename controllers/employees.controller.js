import query from "../db/utils";

const findAll = async () => {
  return query("SELECT EmployeeID, FirstName, LastName, Title FROM employees");
};

const findOne = async (id) => {
  return query("SELECT * FROM employees WHERE EmployeeID = ?", [
    id
  ]);
};

//INSERT INTO employees (FirstName, LastName, Title) VALUES ("Bob", "TesterGuy", "Stocker");
const addOne = async (newEmployeeData) => {
    //Safer against SQL Injection Attacks!!!
    return query(`INSERT INTO employees SET ?`, newEmployeeData);
}

//UPDATE employees SET Title='Stalker' WHERE EmployeeID = 34622;
async function updateOne(employeeId, updatedData){
    return query(`UPDATE employees SET ? WHERE EmployeeID = ?`, [updatedData, employeeId]);
}

//DELETE FROM employees WHERE EmployeeID = 34622;
async function removeOne(employeeId){
    return query(`DELETE FROM employees WHERE EmployeeID = ?`, employeeId);
}

export default {
    findAll,
    findOne,
    addOne,
    updateOne,
    removeOne
}