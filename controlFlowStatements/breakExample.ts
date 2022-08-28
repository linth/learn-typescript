/**
 * Break
 * 
 * Reference:
 *  - 
 */

let products = [
    { name: 'phone', price: 700 },
    { name: 'tablet', price: 900 },
    { name: 'laptop', price: 1200 }
];

for (var p=0; p<products.length; p++) {
    if (products[p].price == 900)
        break;
}

// show the products
console.log(products[p]); // { name: 'tablet', price: 900 }


let breakDiscount = 0;

switch (products[1].name) {
    case 'phone': 
        breakDiscount = 5;
        break;
    case 'tablet':
        breakDiscount = 10;
        break;
    case 'laptop':
        breakDiscount = 15;
        break;
}


console.log(`there is a ${breakDiscount} on ${products[1].name}`); // there is a 10 on tablet
