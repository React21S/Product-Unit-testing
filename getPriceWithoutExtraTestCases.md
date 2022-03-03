# Test cases for getPriceWithoutExtras

### **getPriceWithoutExtras(id)**

Returns the price with out extras

  - Parameters: id of the product
  - Return: The price of the product not including the price of the extras
  - if no product with the given number is found throws an exception `nothing found with given id`



### Test 1: 


### Example id 1:

### Test 1: getPriceWithoutExtras by Ids. get the price of the id "1" 


```js
storage.getPriceWithoutExtras(1);
```
return 
 ```json
    {"id":1, "price": 99,}
```

### Test 2: no product with the given number is found


```js
storage.getPriceWithoutExtras(5);
```
return 
throws an exception `nothing found with given id`

### Test 3: if parameter is missing 
```js
storage.getPriceWithoutExtras();
```
throw new Error `parameter missing`