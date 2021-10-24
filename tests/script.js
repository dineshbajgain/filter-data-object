const filterDataObject = require('filter-data-object')
const objectSet = [
    {
        "userId": 2,
        "id": 1,
        "title": "sunt aut facere"
    },
    {
        "userId": 2,
        "id": 2,
        "title": "qui est esse",
    }]
//Return array matching keywrod with title
console.log(filterDataObject(objectSet,'title','sunt',false))
//Return array matching exact with title
console.log(filterDataObject(objectSet,'title','sunt aut facere',true))
//Return array matching exact with userId
console.log(filterDataObject(objectSet,'userId',2,true))