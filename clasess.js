"use strict";
class Product {
    displayId() {
        console.log('product Id is : ${this.productId}');
    }
}
const shirt = new Product();
shirt.productId = 5501;
shirt.displayId();
//ond
