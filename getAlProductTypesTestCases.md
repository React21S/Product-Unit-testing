# Test Cases

### **getAllProductTypes()**

Returns an array of different product types. 

  - Parameters: none
  - Return: Returns an array of different product types. If no types are found, returns an empty array. The type is added to the result array only once.

## Method


### Test 1. use default data
get different of product type 

```json
["moccamaster", "vacuum cleaner", "radio"]
```

### Test 2: with custom data
get product type of the given data where exists only product of one type
```json
[
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
    }
]
```

returns
```json
["moccamaster"]
```

### Test 3: no types are found in storage 

#### Test data
```json
[
    {"id": 1,
    "model": "Future 2025",
    },
    {"id": 2,
    "model":"Beast II",
    },
    {"id": 3,
    "model": "MaxEffect 2000",
    }
]
```

returns
```json
[]
```


### Test 4: product has no type

#### Test data
```json
 const testData=[
                {
                "id": 1,
                "model": "Future 2025",
                "type": [],
              },
              {
                "id": 2,
                "model": "Beast II",
                "type": [],
              },
              {
                  "id": 3,
                  "model": "MaxEffect 2000",
                  "type": [],
              }
          ];
``` 
returns
```json
[]
```

