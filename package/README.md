# Filter Data Object

Filter Object is a Javascript library for dealing format of the array object.

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
console.log(mapObject(objectSet, ["id", "title"]));
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
