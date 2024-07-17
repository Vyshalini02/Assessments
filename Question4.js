let customers = [
    {
        'id': 1,
        'f_name': 'Abby',
        'l_name': 'Thomas',
        'gender': 'M',
        'married': true,
        'age': 32,
        'expense': 500,
        'purchased': ['Shampoo', 'Toys', 'Book']
    },
    {
        'id': 2,
        'f_name': 'Jerry',
        'l_name': 'Tom',
        'gender': 'M',
        'married': true,
        'age': 64,
        'expense': 100,
        'purchased': ['Stick', 'Blade']
    },
    {
        'id': 3,
        'f_name': 'Dianna',
        'l_name': 'Cherry',
        'gender': 'F',
        'married': true,
        'age': 22,
        'expense': 1500,
        'purchased': ['Lipstik', 'Nail Polish', 'Bag', 'Book']
    },
    {
        'id': 4,
        'f_name': 'Dev',
        'l_name': 'Currian',
        'gender': 'M',
        'married': true,
        'age': 82,
        'expense': 90,
        'purchased': ['Book']
    },
    {
        'id': 5,
        'f_name': 'Maria',
        'l_name': 'Gomes',
        'gender': 'F',
        'married': false,
        'age': 7,
        'expense': 300,
        'purchased': ['Toys']
    }
];

//4) for each element in the array use call back to multiply by 2
//function forEachElement(arr, callback)
//callback: will multiply each element with 2

function forEachElement(arr, callback) {
    let b = [];
    for (let i = 0; i < arr.length; i++) {
        b[i] = callback(arr[i])
    }
    return b;
}
function multiply(ele) {
    return ele * ele;
}
let a = [1, 2, 3, 4, 5]
b = forEachElement(a, multiply)
console.log(b);