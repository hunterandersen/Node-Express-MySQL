import query from "../db/utils";

async function findOne(id){
    return await query(`SELECT * FROM Products WHERE ProductId = ?`, [id]);
}

async function findAll(){
    return await query(`SELECT * FROM Products`);
}

async function addOne(newProduct){
    return await query(`INSERT INTO Products SET ?`, [newProduct]);
}

async function updateOne(id, newData){
    return await query(`UPDATE Products SET ? WHERE ProductID = ?`, [newData, id]);
}

async function removeOne(id){
    return await query(`DELETE FROM Products WHERE ProductID = ?`, [id]);
}

export default {
    findOne,
    findAll,
    addOne,
    updateOne,
    removeOne
}