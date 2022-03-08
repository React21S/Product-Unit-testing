'use strict';

const ProductStorage = require('../ProductStorage');
const dataStorage = require('../dataStorage.json');

// Testing for constructor
describe('Testing of constructor', ()=>{
    test('Test 1: object is passed as a parameter',()=>{
        const storage = new ProductStorage(dataStorage);
        expect(storage.productStorage).toEqual(dataStorage);
    });

    test('Test 2: missing parameter throws an exception', ()=>{
        expect(()=> new ProductStorage()).toThrow('data storage missing');
    });
});

// Testing by getById(id)
describe('Testing method getById test.each', ()=>{
    const storage = new ProductStorage(dataStorage);
    describe('Test 1: get with id of the product',()=>{
        const storage = new ProductStorage(dataStorage);
       
        const testValue1 =[
            // id      expected
            [1, dataStorage[0]],
        ];
        const testValue2 =[
            // id      expected
            [2, dataStorage[1]],
        ];
        const testValue3 =[
            // id      expected
            [3, dataStorage[2]], 
        ];
        test.each(testValue1)(' Test 1-1: id %s returns %p', (id,expected)=>{
            expect(storage.getById(id)).toEqual(expected);
        })
        test.each(testValue2)(' Test 1-2: id %s returns %p', (id,expected)=>{
            expect(storage.getById(id)).toEqual(expected);
        })
        test.each(testValue3)(' Test 1-3: id %s returns %p', (id,expected)=>{
            expect(storage.getById(id)).toEqual(expected);
        })
    });

    describe('Test 2-3:no match with given id and parameter missing', ()=>{
    test('Test 2: no match with given id return null', ()=>{
        expect(storage.getById(4)).toEqual(null);
    });
    
    test('Test 3: if id is missing throws an exception', ()=>{
        expect(()=>storage.getById()).toThrow('parameter missing');
    });
    });
   
});

// Testing the product by getAllIdsByModel
describe('Testing method getAllIdsByModel with model value.(Future 2025, Beast II and MaxEffect 2000)', ()=>{
    const storage = new ProductStorage(dataStorage);
    describe('Test 1: testing with test.each',()=>{

        const testValue1 =[
            // model     expected
            ["Future 2025", [1]],
        ];
        const testValue2 =[
            // model      expected
            ["Beast II", [2]],
        ];
        const testValue3 =[
            // model      expected
            ["MaxEffect 2000", [3]],
        ];
        test.each(testValue1)(' Test 1-1: model %s returns %p', (model,expected)=>{
            expect(storage.getAllIdsByModel(model)).toEqual(expected);
        });
        test.each(testValue2)(' Test 1-2: model %s returns %p', (model,expected)=>{
            expect(storage.getAllIdsByModel(model)).toEqual(expected);
        });
        test.each(testValue3)(' Test 1-3: model %s returns %p', (model,expected)=>{
            expect(storage.getAllIdsByModel(model)).toEqual(expected);
        });

    });
    describe('Test 2-3: no product match with model and parameter missing ', ()=>{
        const testValue =[
            // model      expected
            ['MaxEffect 200', []], 
        ];
        test.each(testValue)('Test 2: there is no product match with model %s returns %p', (model,expected)=>{
            expect(storage.getAllIdsByModel(model)).toEqual(expected)
        });

        // or in short form 

        test('Test 2: there is no product match with model', ()=>{
            expect(storage.getAllIdsByModel('MaxEffect 200')).toEqual([]);
        });  

        test('Test 3: model parameter is missing', ()=>{
            expect(storage.getAllIdsByModel()).toEqual([]);
        });    
    });  
});


// Testing the product by getAllProductTypes
describe('Testing method getAllProductTypes',()=>{
    test('Test 1: use default data',()=>{
        const storage = new ProductStorage(dataStorage);
        expect(storage.getAllProductTypes()).toEqual(["moccamaster", "vacuum cleaner", "radio"])
    });
    
    test('Test 2: with custom data', ()=>{
        const tstData=[
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
        ];
        const storage = new ProductStorage(tstData);
        expect(storage.getAllProductTypes()).toEqual(["moccamaster"]);
    });

    test('Test 3: no types are found in storage',()=>{
        const testData = [
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
        ]
        const storage = new ProductStorage(testData);
        expect(storage.getAllProductTypes()).toEqual([]);
    });

   
    test('Test 4: product  has no type',()=>{
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
        const storage = new ProductStorage(testData);
        expect(storage.getAllProductTypes()).toEqual([]);
    });
    
});


// Testing the product by getAllProductsByType(type)
 describe('Testing method getAllProductsByType with types. (moccamaster, vacuum cleaner, radio)', ()=>{
    const storage = new ProductStorage(dataStorage);

    describe('Test 1: testing with test.each',()=>{

        const testValue1 =[
            // type     expected
            ["vacuum cleaner", dataStorage[0]],
        ];

        const testValue2 =[
            // type     expected
            ["vacuum cleaner", dataStorage[1]],
        ];
        const testValue3 =[
            // type     expected
            ["radio", dataStorage[2]],
        ];

        test.each(testValue1)(' Test 1-1 if the product: type %s returns %p', (type,expected)=>{
            expect(storage.getAllProductsByType("moccamaster")).toEqual([expected]);
        });
        test.each(testValue2)(' Test 1-2 if the product: type %s returns %p', (type,expected)=>{
            expect(storage.getAllProductsByType(type)).toEqual([expected]);
        });
        test.each(testValue3)(' Test 1-3 if the product: type %s returns %p', (type,expected)=>{
            expect(storage.getAllProductsByType(type)).toEqual([expected]);
        });
    });

    describe('Test 2-3: getAllProductsByType no product and missing type ',()=>{
        test('Test 2. no product of given type is found', ()=>{
            expect(storage.getAllProductsByType('xxx')).toEqual([]);
        })
        
        test('Test 3: missing type throws an exception', ()=>{
            expect(()=> storage.getAllProductsByType()).toThrow('parameter missing')
        });
    });
});


// Testing the product by hasAccessories(id)
describe('Testing : hasAccessories in the product',()=>{
    const storage = new ProductStorage(dataStorage);

    const testValue1 =[
        // id        expected
        [1, true],
    ];
    const testValue2 =[
        // id        expected
        [2, true],
    ];
    const testValue3 =[
        // id        expected
        [3, false],
    ];
   

    test.each(testValue1)(' Test 1-1 get accessories, if id%s has accessories in the product then returns %p', (id,expected)=>{
        expect(storage.hasAccessories(id)).toEqual(expected);
    });
    test.each(testValue2)(' Test 1-2 get accessories, if id%s has accessories in the product then returns %p', (id,expected)=>{
        expect(storage.hasAccessories(id)).toEqual(expected);
    });

    test.each(testValue3)(' Test 2: if no accessories in the product with %s then returns  %p', (id,expected)=>{
        expect(storage.hasAccessories(id)).toEqual(expected);
    });

    test(' Test 3: if parameter id is missing return false ', ()=>{
        expect(storage.hasAccessories()).toEqual(false);
    });
 
});

// Testing the product by GetProductAccessories(id)
describe('Testing getProductAccessories method',()=>{
    const storage = new ProductStorage(dataStorage);
    
    const testValue1 =[
        // id        expected
        [1, dataStorage[0].accessories],
    ];
    const testValue2 =[
        // id        expected
        [2, dataStorage[1].accessories],
    ];
    const testValue3 =[
        // id        expected
        [3, dataStorage[2].accessories],
    ];
    test.each(testValue1)(' Test 1-1 get accessories of %s in the product then returns the accessories as %p', (id,expected)=>{
        expect(storage.getProductAccessories(id)).toEqual(expected);
    });
    test.each(testValue2)(' Test 1-2 get accessories of %s in the product then returns the accessories as %p', (id,expected)=>{
        expect(storage.getProductAccessories(id)).toEqual(expected);
    });
    test.each(testValue3)(' Test 1-3 get accessories of %s in the product then returns the accessories as %p', (id,expected)=>{
        expect(storage.getProductAccessories(id)).toEqual(expected);
    });
    
    test('Test 2: If none accessories found', ()=>{
        const storage = new ProductStorage([]);
        expect(storage.getProductAccessories(5)).toEqual([]);
    }); 

    test('Test 3: accessories missing', ()=>{
        const storage = new ProductStorage([]);
        expect(()=>storage.getProductAccessories()).toThrow('parameter missing') 
    });
});


// Testing the product by getPriceWithoutExtras(id)
describe('Testing getPriceWithoutExtras methods', ()=>{
    const storage = new ProductStorage(dataStorage);

   test(' Test 1-1 getPriceWithoutExtras by Id 1, return 99. ', ()=>{
        expect(storage.getPriceWithoutExtras(1)).toBe(dataStorage[0].price);
    });
    test(' Test 1-2 getPriceWithoutExtras by Id 2. return 99', ()=>{
        expect(storage.getPriceWithoutExtras(2)).toBe(dataStorage[1].price);
    });
    test(' Test 1-3 getPriceWithoutExtras by Id 3. return 29', ()=>{
        expect(storage.getPriceWithoutExtras(3)).toBe(dataStorage[2].price);
    });

    test('Test 2: no product with the given number is found', ()=>{
        expect(()=>storage.getPriceWithoutExtras(5)).toThrow('nothing found with given id')
    });

    test('Test 3: All price are missing', ()=>{
        const storage = new ProductStorage([]);
        expect(()=>storage.getPriceWithoutExtras()).toThrow('parameter missing') 
    });
    
});


// Testing the product by getTotalPrice(id)
describe('getTotalPrice (the product including the total price of the extras)', ()=>{
    const storage = new ProductStorage(dataStorage);
   
    const testValue1 =[
        // id        expected
        [1, 224],
    ];
    const testValue2 =[
        // id        expected
        [2, 124],
    ];
    const testValue3 =[
        // id        expected
        [3, 29],
    ];
    test.each(testValue1)(' Test 1-1 getTotalPrice by Ids. get the price of id %s returns %p', (id,expected)=>{
        expect(storage.getTotalPrice(id)).toEqual(expected);
    });
    test.each(testValue2)(' Test 1-2 getTotalPrice by Ids. get the price of id %s returns %p', (id,expected)=>{
        expect(storage.getTotalPrice(id)).toEqual(expected);
    });
    test.each(testValue3)(' Test 1-3 getTotalPrice by Ids. get the price of  id %s returns %p', (id,expected)=>{
        expect(storage.getTotalPrice(id)).toEqual(expected);
    });

   
    test('Test 2: no product with the given number is found', ()=>{
        expect(()=>storage.getTotalPrice(4)).toThrow('nothing found with given id')
    });
    
    test('Test 3: All number are missing', ()=>{
        const storage = new ProductStorage([]);
        expect(()=>storage.getTotalPrice()).toThrow('parameter missing') 
    });
    
});

// Testing the product by getPriceOfTheExtras(id)
describe('Testing getPriceOfTheExtras, price of extras bundled with the product', ()=>{
    const storage = new ProductStorage(dataStorage);
  
    const testValue1 =[
        // id        expected
        [1, 125],
    ];
    const testValue2 =[
        // id        expected
        [2, 25],
    ];
    const testValue3 =[
        // id        expected
        [3, 0 ],
    ];

    test.each(testValue1)(' Test 1-1 getPriceOfTheExtras by Ids. get the price of %s returns %p', (id,expected)=>{
        expect(storage.getPriceOfTheExtras(id)).toEqual(expected);
    });
    test.each(testValue2)(' Test 1-2 getPriceOfTheExtras by Ids. get the price of %s returns %p', (id,expected)=>{
        expect(storage.getPriceOfTheExtras(id)).toEqual(expected);
    });
    test.each(testValue3)(' Test 1-3 getPriceOfTheExtras by Ids. get the price of %s returns %p', (id,expected)=>{
        expect(storage.getPriceOfTheExtras(id)).toEqual(expected);
    });

    test('Test 2: no product with the given number is found', ()=>{
        expect(()=>storage.getPriceOfTheExtras(5)).toThrow('nothing found with given id')
    });
 
    
    test('Test 3: All price are missing', ()=>{
        const storage = new ProductStorage([]);
        expect(()=>storage.getPriceOfTheExtras()).toThrow('parameter missing') 
    });
    
});
