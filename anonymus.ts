// Anonymus Typess
let products: Array<{
  title: string;
  img: string;
  price: number;
  discount: number | undefined;
  count: number;
}>;
let payment: { productAmount: number; geteway: string };
let basket: {products: object, payment: object}
basket = {
    products: [
        {
            title: "Iphone 13 pro max",
            img: "https://foolan.png",
            price: 52000000,
            discount: 5,
            count: 500
        }
    ], 
    payment: {
        productAmount: 24700000000,
        geteway: "zarrinpal"

    }
}