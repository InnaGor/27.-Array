// 1. Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, 
// необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.

//  - Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
//  - Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, 
// необходимо увеличивать количество в существующей покупке, а не добавлять новую.
//  - Покупка продукта. Функция принимает название продукта и отмечает его как купленный.

let shopping_list = [
    {
        item: "fish",
        amount: 3,
        isBought: false,
    },
    {
        item: "rice",
        amount: 2,
        isBought: true,
    },
    {
        item: "tomato",
        amount: 10,
        isBought: true,
    },
    {
        item: "egg",
        amount: 10,
        isBought: false,
    },
    {
        item: "onion",
        amount: 5,
        isBought: false,
    },
]


// Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
let sort = (shopping_list) => {
    shopping_list.sort((a, b) => a.isBought - b.isBought);
    return shopping_list;
}
console.log(sort(shopping_list));

//  - Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, 
// необходимо увеличивать количество в существующей покупке, а не добавлять новую.

let new_product = prompt("Add a product to list?", "");
let amount = parseInt(prompt("How many?", ""));

while (new_product) {
    shopping_list.unshift({
        item: new_product,
        amount: amount,
        isBought: false,
    });
    for (i = 1; i < shopping_list.length; i++) {
        if (shopping_list[i].item == shopping_list[0].item) {
            shopping_list[i].amount += shopping_list[0].amount;
            shopping_list.shift();
            break;
        }
    }

    new_product = prompt("Add a product to list?", "");
    amount = parseInt(prompt("How many?", ""));
}
console.log(shopping_list);

// - Покупка продукта. Функция принимает название продукта и отмечает его как купленный.

let what_is_bought = prompt("What is bought?", "");

/*let what = shopping_list.find((e => { //как это можно было бы использовать?
    return (e.item == what_is_bought)
})*/

let bought_status = (item) => {
    for (i = 0; i < shopping_list.length; i++) {
        if (shopping_list[i].item == what_is_bought) {
            shopping_list[i].isBought = true;
            break;
        }
    }
}
bought_status(what_is_bought);

console.log(sort(shopping_list));