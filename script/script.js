//1. Напишите функцию, которая использует forEach, чтобы складывать все элементы массива и возвращать сумму.

function sumArray(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum +=element;
    });
    return sum;
}

//2. Дан массив строк. Используйте forEach, чтобы преобразовать каждую строку в верхний регистр и сохранить изменения в том же массиве.

const strings = ['dog',  'cat', 'monkey',  'panda'];
strings.forEach((string, index) => {
    strings[index] = string.toUpperCase()
});
console.log(strings);

// 3. Дан массив чисел. Создайте новый массив, в котором будут лежать квадраты каждого числа из исходного массива.

const numbers = [1, 2, 3, 4, 5, 8];
const squares = numbers.map((number) => number **2)
console.log(squares);

//4. Дан массив объектов с информацией о товарах. Необходимо создать новый массив, содержащий только имена товаров.

const products = [
    {id: 1, name: 'apple', price: 800},
    { id: 2, name: 'sumsung', price: 600},
    {id: 3,  name: 'motorola', price: 200},
];
const productsNames = products.map(product => product.name);
console.log(productsNames);

//5. Дан массив чисел. Создайте новый массив, в котором будут только отрицательные числа из исходного массива.

const arrNumbers = [1, -2, 7, 3, -4, 5, -7, 9, 12];
const negativeNewArrNumbers = arrNumbers.filter((item) => item < 0)
console.log(negativeNewArrNumbers);


