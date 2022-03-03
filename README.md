# Products API testing

### 1.   Create a project folder

### 2. Create package.json (with npm init or manually)
```shell
> npm init -y
```

### 3. Install jest as devDependency 

```shell
> npm install jest --save-dev
```

This modifies the package.json file by adding devDependencies to it
```json
 "devDependencies": {
    "jest": "^27.5.1"
  }
```

### 4. Modify the test-script in package.json change the script from
```json
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
to

 "scripts": {
    "test": "jest"
  },
```


### 5. Create test folder named 
(underscore underscore tests underscore underscore )
`__tests__`

### 6. Write tests

### 7. Run tests
```shell
> npm test
```

### 7B. To run only one test file
- test all file that have name test in it
```shell
> npm test --testFile fileToBETested.test.js
```


# Products API test cases
Checking the Products API [here](/ProductsAPI.md)

## API cases for Products storage testing
Checking for testing Products constructor cases [here](/constructorTestCase.md)

Checking for testing Products by getById(id) cases [here](/getByIdTestCases.md)

Checking for testing Products by getAllIdsByModel cases [here](/getAllIdsByModelTestCases.md)

Checking for testing Products by getAllProductTypes cases [here](/getAlProductTypesTestCases.md)

Checking for testing Products by getAllProductsByType(type) cases [here](/getAllProductsByTypesTestCases.md)

Checking for testing Products by hasAccessories(id) cases [here](/hasAccessoriesTestCases.md)

Checking for testing Products by GetProductAccessories(id) cases [here](/getProductAccessoriesTestCases.md)

Checking for testing Products by getPriceWithoutExtras(id) cases [here](/getPriceWithoutExtraTestCases.md)

Checking for testing Products by getTotalPrice(id) cases [here](/getTotalPriceTestCases.md)

Checking for testing Products by  getPriceOfTheExtras(id) cases [here](/getPriceOfTheExtrasTestCases.md)

---
## Test result

![Testresult](/img/TestResult.png)

---

## Important link 

- [Jest test getting-started](https://jestjs.io/docs/getting-started)

- Jest installation procedure

    - [Check Documentation:](https://jestjs.io/)
