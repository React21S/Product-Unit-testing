# getById Test cases

### **getById(id)**

Method searches the dataStorage for an object with given key. Key is unique.

  - Parameters: id of the product
  - Return: returns the product object matching the id or null if there is no match
  - if parameter is missing, throws an exception `'parameter missing'`

## method

- returns an object of the dataStorage of the given `id`;
- If no match with given `id` is found, `null` is returned.
- if parameter is missing, throws an exception `'parameter missing'`


creation of product object from the `ProductStorage` class with the default object to use for all the test cases is needed before testing.
```js
storage.getById()
```

## Test 1: get with id of the product
for example: For searching with  `id=1`

```js
storage.getById(1)
```

```json
 returns [
     {
      "id": 1,
      "model": "Future 2025",
      "type": "moccamaster",
      "accessories": ["cleaning brush", "coffee cup"],
      "price": 99,
      "extras": [{
          "name": "coffee",
          "price": 15
        },
        {
          "name": "spoon",
          "price": 10
        },
        {
          "name": "color gold",
          "price": 100
        }
      ]
    },
 ]
```

## Test 2: no match with given id

```js
storage.getById(4)
```

returns `'null'`


## Test 3: parameter is missing

```js
storage.getById()
```
throws an exception `'parameter missing'`