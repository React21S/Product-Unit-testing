# Test cases getTotalPrice

### **getTotalPrice(id)**

Returns the total price of the product including the total price of the extras

  - Parameters: id of the product
  - Return: The price of the product including the total price of the extras
  - if no product with the given number is found throws an exception `nothing found with given id`




### Example id 1:
Before tests create storage  object from  the `ProductStorage` class with the default data
## Test:  getTotalPrice (the product including the total price of the extras)

### Test 1: getTotalPrice by Ids. get the total price of the id "1" 


```js
storage.getTotalPrice(1);
```
```json
{
      "id": 1,
      "model": "Future 2025",
      "type": "moccamaster",
      "accessories": ["cleaning brush", "coffee cup"],
      "price": 99,
      "extras": [{
          "name": "coffee",
          "price": 15},
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
´´´
return 
 ```json
    {"id":1, "TotalPrice": 224, }
```

### Test 2: no product with the given number is found


```js
storage.getTotalPrice(4);
```
return 
throws an exception `nothing found with given id`

### Test 3: if parameter is missing 
```js
storage.getTotalPrice();
```
throw new Error `parameter missing`