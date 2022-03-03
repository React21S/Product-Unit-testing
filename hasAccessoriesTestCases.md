# Test cases hasAccessories

### **hasAccessories(id)**
  
- Parameters: id of the product
- Return: returns true if the product has accessories else returns false. If parameter id is missing false is returned


## Test 1: get  accessories with id of the product
for example id 1

```json
[
    {
        "id": 1,
        "model": "Future 2025",
        "type": "moccamaster",
        "accessories": ["cleaning brush", "coffee cup"]
    }
]
```

```js
storage.hasAccessories(id);
```
returns `true`

## Test 2: No accessories with id of the product
for example id 3

```json
[
    {
      "id": 3,
      "model": "MaxEffect 2000",
      "type": "radio",
      "accessories": [],
    }
]
```

```js
storage.hasAccessories(id);
```
returns `false`

## Test 3: parameter id is missing

```json
[
    {
      "id": "",
      "model": "MaxEffect 2000",
      "type": "radio",
      "accessories": [],
    }
]
```

```js
storage.hasAccessories(id);
```
returns `false`
