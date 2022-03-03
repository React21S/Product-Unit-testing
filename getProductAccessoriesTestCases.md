# Test cases

### **GetProductAccessories(id)**

Returns an array of product accessories. If none found, returns an empty array.

  - Parameters: id of the product 
  - Return: returns accessories as an array



  The format of the returned array of product accessories is:
```json
[
    {"id":"", "accessories":["", "", ""]},
    {"id":"", "accessories":["", "", ""]},
    {"id":"", "accessories":["", "", ""]},
]
```

## Test 1: get with parameters 1, accessories
before test create storage object from ProductStorage class with default data

```js
storage.getProductAccessories(2,"accessories")
```
returns 
```json
[
    {
        "id": 2,
        "accessories": ["bags", "filter set","delux brush set"],
    }
]
```

## Test 2: If none accessories found
```js
storage.getProductAccessories(3)
```

returns []

## Test 3: accessories are missing

```js
storage.getProductAccessories()
```
throws an exception `'parameter missing'`