//create type alias
type IdFormate = string | number;
class Product {
    productId! : IdFormate;

    displayId():void {
        console.log('product Id is : ${this.productId}');

    }
    
}
const shirt = new Product();
shirt.productId=5501;
shirt.displayId();
//ond