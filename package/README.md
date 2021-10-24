# Filter Data Object

Filter Object is a Javascript library for dealing filter of the array object.

## Installation

Use the package manager [npm](https://www.npmjs.com/package/map-data-object) to install map-data-object.

```bash
npm i filter-data-object
```

## Usage

```javascript
const filterObject = require("filter-data-object");

const objectSet = [
    {
        userId: 2,
        id: 1,
        title: "sunt aut facere",
    },
    {
        userId: 2,
        id: 2,
        title: "qui est esse",
    },
];
//Return array matching keywrod with title
console.log(filterDataObject(objectSet,'title','sunt',false))
//Return array matching exact with title
console.log(filterDataObject(objectSet,'title','sunt aut facere',true))
//Return array matching exact with userId
console.log(filterDataObject(objectSet,'userId',2,true))
```
filterDataObject(objectSet,'userId',2,true)
Here 4 argument passing to the function filterDataObject.

####filterDataObject(`arrayData`,`key`,`search`,`exact`)
`arrayData` = can be any array (eg: objectSet)
`key` = filter parameter you want to filter (eg : userId, id, title)
`search` = it can be string or integer which can be found in `key` (eg : 'any data',11)
`exact` = `true` if you want to find the exact value can be use in both integer and string
        `false` only for string search for finding matching
## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
