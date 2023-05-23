import query from "../db/utils";

function findOne(id){
    return "Yup, it found one";
    //return query("BLAH BLAH", [id]);
}

export default {
    findOne
}