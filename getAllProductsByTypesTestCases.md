# Test cases

### **getAllProductsByType(type)**

Returns an array of product objects of given type

  - Parameters: type of the product to be searched
  - Returns an array of product objects of given type. If no product of given type is found, returns an empty array.
  - If a parameter type is missing, an exeption **'missing parameter'** is thrown.


### Example type moccamaster:

Before tests create storage  object from  the `ProductStorage` class with the default data

### Test 1: getAllProductsByType with types. moccamaster, vacuum cleaner, radio

For searching with product type as `moccamaster`
```js
storage.getAllProductsByType ('moccamaster');
```
returns
```json
[
    {
      "id": 1,
      "model": "Future 2025",
      "type": "moccamaster",
    },

    {"id": 2,
    "model":"Beast II",
    "type": "vacuum cleaner",
    },
    
    {"id": 3,
    "model": "MaxEffect 2000",
    "type": "radio",
    }
]
```
### Test 2: If no product of given type is found returns an empty array

```js
storage.getAllProductsByType(xxx);
```
returns `'[]'`

### Test 3: If a parameter type is missing throws an exception

```js
storage.getAllProductsByType();
```
throws an exception `'parameter missing'`
