# Constructor test cases

## **constructor(jsonData)**
- dataStorage json object is passed as a parameter to the `constructor`
- If the parameter is missing, `constructor` throws an error `'data storage missing'`.


### Test 1: object is passed as a parameter
```js
new ProductStorage(jsonData);
```


### Test 2: missing parameter throws an exception
```js
new ProductStorage()
```
returns throw an exception `'data storage missing'`
