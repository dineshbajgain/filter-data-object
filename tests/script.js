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
console.log(filterDataObject(objectSet,'title','qui est esse',true))