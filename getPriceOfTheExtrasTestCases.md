# Test cases for getPriceOfTheExtras

### **getPriceOfTheExtras(id)**

Returns the total price of extras bundled with the product
 
  - Parameters: id of the product to be searched
  - Return: the total price of extras. If no extras is found returns 0
  - if no product with the given number is found throws an exception `nothing found with given id`


### Test 1: 


### Example id 1:

### Test 1: getPriceOfTheExtras by Ids. get the price of the id "1" 

#### Test data 1-1
```json
 [1, [
     {"extras": [
                {"name": "coffee","price": 15}, 
                {"name": "spoon","price": 10}, 
                {"name": "color gold","price": 100}
                ]
    }
    ]
]
```

#### If no extras is found

```js
storage.getPriceOfTheExtras(1);
```
return 
 ```json
   [ 125]
```

#### Test 1-3 If no extras is found
return 
 ```json
   [0]
```

### Test 2: no product with the given number is found


```js
storage.getPriceOfTheExtras(4);
```
return 
throws an exception `nothing found with given id`

### Test 3: if parameter is missing 
```js
storage.getPriceOfTheExtras();
```
throw new Error `parameter missing`