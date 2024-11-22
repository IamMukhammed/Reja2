console.log("Jack Ma maslahatlari");
const list = [
    "Yaxshi talaba bo'ling",                            // 9 - 20
    "To'g'ri boshliq tanlang va ko'proq hato qiling",   // 20 - 30
    "O'zingizga ishlashni boshlang",                    // 30 - 40
    "Siz kuchli bo'lgan narsalarni qiling",             // 40 - 50
    "Yoshlarga investitsiya qiling",                    // 50 - 60
    "Endi dam oling, foydasi yo'q endi",                // 60 + ...
];

// Callback functions

/* function maslahatBering(a, callback) { // Hatolikga tegishli qism
    if(typeof a !== 'number') callback("Insert a number pls", null); // Qiymat qaytarmoqchi bolingan result ga tegishli
    else if(a <= 20) callback(null, list[0]);
    else if(a > 20 && a <= 30) callback(null, list[1]);
    else if(a > 30 && a <= 40) callback(null, list[2]);
    else if(a > 40 && a <= 50) callback(null, list[3]);
    else if(a > 50 && a <= 60) callback(null, list[4]);
    else {
        // callback(null, list[5]);
        setTimeout(function () {
            callback(null, list[5]);
        }, 5000);
    }
}
*/

// Calling 'Callback function'
/* console.log("Passed here 0");
maslahatBering(60, (err, data) => {
// maslahatBering('Salom', (err, data) => {
    if(err) console.log('ERROR:', err);
    else {
        console.log('Answer:', data);
    }
});
console.log("Passed here 1"); */


// Hamma userlar qilyatgan zaproslar 'server.js da const server = http.createServer(app);'
// bo'limida amalga oshiriladi. Va bu 'Single Thread' deb nomlanadi.

    
// Asyncronius function

/* async function maslahatBering(a) { // Hatolikga tegishli qism
     if(typeof a !== 'number') throw new  ERROR("Insert a number pls", null); // Qiymat qaytarmoqchi bolingan result ga tegishli
     else if(a <= 20) return list[0];
     else if(a > 20 && a <= 30) return list[1];
     else if(a > 30 && a <= 40) return list[2];
     else if(a > 40 && a <= 50) return list[3];
     else if(a > 50 && a <= 60) return list[4];
     else {
         return list[5];
         // setTimeout(function () {
         //     return list[5];
         // }, 5000);
     }
}
 */

// Calling 'Async function' (then/catch)

/* console.log("Passed here 0");
maslahatBering(25)
    .then(data => {
        console.log('Answer:', data);
    })
    .catch(err => {
        console.log("ERROR:", err);
});
console.log("Passed here 1"); */

/* Async function sync function lar to'liq ishga 
tushib bo'lgach Async  function ni natijalari bn node.js 
ishlashni boshlaydi */


// Calling 'Async function' (async/await)
/* async function run() {
    let javob = await maslahatBering(40);
    console.log(javob);
    javob = await maslahatBering(35);
    console.log(javob);
    javob = await maslahatBering(55);
    console.log(javob);
}
run(); */

/* Bu yerda biz "Async function" ni call qilishda 
'async va await' formasidan foydalandik.
Va natijada 'async/await' formasi javob qaytarishda ketma-ketlik 
bn qaytarishini o'rgandik. Buning bizga qulayligi source miz 
tartibli holatda chiqadi. */


// Async function ni 'Promise' formasi
/* async function maslahatBering(a) { // Hatolikga tegishli qism
    if(typeof a !== 'number') throw new  ERROR("Insert a number pls", null); // Qiymat qaytarmoqchi bolingan result ga tegishli
    else if(a <= 20) return list[0];
    else if(a > 20 && a <= 30) return list[1];
    else if(a > 30 && a <= 40) return list[2];
    else if(a > 40 && a <= 50) return list[3];
    else if(a > 50 && a <= 60) return list[4];
    else {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(list[5]);
            }, 5000);
        });
        
    }
}
*/

// Calling 'Async function' (async/await)
/* async function run() {
    let javob = await maslahatBering(40);
    console.log(javob);
    javob = await maslahatBering(35);
    console.log(javob);
    javob = await maslahatBering(55);
    console.log(javob);
}
run(); */


/* function maslahatBering(a, callback) { // Hatolikga tegishli qism
    if(typeof a !== 'number') callback("Insert a number pls", null); // Qiymat qaytarmoqchi bolingan result ga tegishli
    else if(a <= 20) callback(null, list[0]);
    else if(a > 20 && a <= 30) callback(null, list[1]);
    else if(a > 30 && a <= 40) callback(null, list[2]);
    else if(a > 40 && a <= 50) callback(null, list[3]);
    else if(a > 50 && a <= 60) callback(null, list[4]);
    else {
        setInterval(function () {
            callback(null, list[5]);
        }, 1000);
    }
}

console.log("Passed here 0");
maslahatBering(70, (err, data) => {
    if(err) console.log('ERROR:', err);
    else {
        console.log('Answer:', data);
    }
});
console.log("Passed here 1"); */


// TASK - A
// function number(letter, word, callback) {
//     let num = 0;                                 
//     for (a of word) {   
//         if (a === letter) {   
//             num = num + 1;             
//         }
//     }

//     callback(num);              
// }

// number("e", "engineer", (result) => {  
//     console.log("result:", result);
// });


// TASK - B

function countDigits(s) {
    let count = 0;
    for (let char of s) {
        if (!isNaN(char) && char.trim() !== '') { // faqat raqamlarni hisoblash
            count++;
        }
    }
    return count;
}

const result = countDigits("ad2a54y79wet0sfgb9");
console.log(result); // 7 raqami chiqadi