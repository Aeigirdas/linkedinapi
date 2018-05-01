//duombaze
const Joi = require('joi');
const personEntity = require('../lib/personEntity');

//Just a temp variables array without DB

let db_array = [];

function addperson(obj){
    isAdded = false;

    let result = Joi.validate(obj, personEntity.personSchema, (err,value) => {
        console.log(err);
        if (!err) {
            db_array.push(obj);
            isAdded = true;        
        } else {
            isAdded = false;
        }
    });

    return isAdded;
}


//Just temp function
function findpersonInArrayById(id){
    for(let i in db_array){
        if(db_array[i].id === id){
           return i;
        }
    }
    return null;
}

function deletepersonById(id){
    let isDeleted = false;
    let personId = findpersonInArrayById(id);

    if(personId != null){
        db_array.slice(personId, 1);
        isDeleted = true;
    }

    return isDeleted;
}

function updatepersonById(id, newObj){
    let isUpdated = false;

    let result = Joi.validate(newObj, personEntity.personSchema,(err,value) => {
        let personId = findpersonInArrayById(id);
        if(personId != null && !err){
            db_array[personId] = newObj;
            isUpdated = true;
        }
    });

    return isUpdated;
}

function getpersonById(id){
    let personId = findpersonInArrayById(id);

    if(personId != null){
        return db_array[personId];
    }

    return null;
}

function getAllSavedpersons(){
    if(db_array.length > 0){
        return db_array;
    }

    return null;
}

//test 

let person1 = new personEntity.personC(
"1",
"firstname",
"lastname",
"headline",
3,
"http://www.google.lt"
)

let person2 = new personEntity.personC(
    "2",
    "firstname2",
    "lastname2",
    "headline2",
    5,
    "http://www.google.lt"
    )
    
addperson(person1);
addperson(person2);
console.log(person1);


module.exports = {
    addperson: addperson,
    getpersonById: getpersonById,
    getAllSavedpersons: getAllSavedpersons,
    updatepersonById: updatepersonById,
    deletepersonById: deletepersonById
};