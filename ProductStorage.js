'use strict';

module.exports = class ProductStorage{
    // construct implementation 
    constructor(constructor){
        if(!constructor) throw new Error('data storage missing');
        else this.productStorage=constructor;
    }

    // getById implementation 
    getById(id){
        if (!id){
            throw new Error('parameter missing');
        }
       for(let product of this.productStorage){
           if(product.id ===id){
               return product
           }
       }
       return null
    };

    //getAllIdsByModel
    getAllIdsByModel(model){
        if(!model){
            return []
        }
        const modelFound=[];
        for (let product of this.productStorage){
            if(product.model===model){
               return product
            }
        }
        return modelFound;
    };

    // getAllProductTypes
    getAllProductTypes(){
        const types =[];
        for(let product of this.productStorage){
            if(product.type){
                if(product.type && product.type.length > 0){
                    if (!types.includes(product.type)) {
                        types.push(product.type);
                    }
                }
            }
          
        }
        return types
    };

    //  getAllProductsByType
     getAllProductsByType(type){
        if(type){
            const typesFound = [];
            for(let product of this.productStorage){
                if(product.type ===type){
                    return product
                }
            }
            return typesFound;
        }else{
            throw new Error ('parameter missing')
        }
    };

    //hasAccessories
    hasAccessories(id){
        if(!id){ return false};
        let product = this.productStorage
        .filter((accessory)=>accessory.id ===id)
        .map((accessory)=>accessory.accessories.length)
        return Boolean(product[0])
    };
        
    // getProductAccessories
    getProductAccessories(id){
        if (!id){
            throw new Error('parameter missing');
        }
        const foundAccessories = [];
            for(let product of this.productStorage){
                if(product.id ===id && !foundAccessories.includes(product.accessories)){
                    return product.accessories
                }
            }
        return foundAccessories; 
        
    };

    //getPriceWithoutExtras
    getPriceWithoutExtras(id){
        if (!id){
            throw new Error('parameter missing');
        }
        const priceFound =[];
        for (let product of this.productStorage){
            let productPrice = 0
            if(product.id===id){
                return productPrice+=product.price
            };
        }
        throw new Error("nothing found with given id");
    };

    // getTotalPrice 
    getTotalPrice(id){
        if (!id) throw new Error("parameter missing");
        let TotalSum = 0;
        for(let product of this.productStorage){
            let productSum = product.price
            if(product.id===id){
                let sum = 0;
                for(let extra of product.extras){
                    sum+=extra.price
                }
                return TotalSum=sum+productSum;
            };
        };
        throw new Error ('nothing found with given id')
        
    };

    //getPriceOfTheExtras
    getPriceOfTheExtras(id){
        if (!id) throw new Error("parameter missing");
        for(let product of this.productStorage){
            if(product.id===id){
                let sum = 0;
                    for(let extra of product.extras){
                    sum+=extra.price
                    }
                return sum;
            }
        }
        throw new Error("nothing found with given id");
    };
};