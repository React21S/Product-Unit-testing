# Test Cases

## getAllIdsByModel Test cases


### **getAllIdsByModel(value)**

Returns all ids of the products matching the value of model
  
  - Parameters: value of the property to be searched
  - Return: Returns an array of product id where the products model matches the given value. 
  - If there is no match or parameter is missing, an empty array is returned.


The format of the returned array of object is 
```json

```


### Example type work:

### Test 1: getAllIdsByModel with model values. "Future 2025", "Beast II" and "MaxEffect 2000". 

For searching with model id  as `Future 2025`
```js
storage.getAllIdsByModel ('Future 2025');
```

```json
[
    {
      "id": 1,
    },
]
```

For searching with model id  as `Beast II`
```js
storage.getAllIdsByModel ('Beast II');
```

```json
[
    {
      "id": 2,
    },
]
```

For searching with model id  as `MaxEffect 2000`
```js
storage.getAllIdsByModel ('MaxEffect 2000');
```

```json
[
    {
      "id": 3,
    },
]
```

### Test 2: there is no product match with model 
```js
storage.getAllIdsByModel ('MaxEffect 200');
```
returns `'[]'`

### Test 3: parameter is missing
```js
storage.getAllIdsByModel ();
```
returns `'[]'`