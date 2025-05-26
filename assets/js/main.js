
const checkBtn = document.getElementById('check-res');
const dialog = document.getElementById('dialog');
const l1 = document.getElementById('l1');
const l2 = document.getElementById('l2');
const l3 = document.getElementById('l3');

let badRes = ["Aie! Réessayez", "Oups! Encore", "Oh non! Veuillez réessayer", "☹️, Réessayez"];
let goodRes = ["😀 Hourra! Trouvé", "😁 Super!", "Prediction efficace! 🙇‍♂️"]
let lives = [l1, l2, l3];
let n = Math.round(Math.random() * 10);
let response = document.getElementById('response');
let life = 3;
let found = false;
console.log("The 'n' to find is :",n);

function check() {
    if (n == parseInt(response.value)) {
        dialog.innerHTML = goodRes[Math.round(Math.random() * (goodRes.length - 1))]
        checkBtn.style.backgroundColor = "#40af0c";
        response.style.borderColor = "#40af0c";
        response.style.backgroundColor = "#ecf7e6";
        response.setAttribute('disabled', 'true');
        checkBtn.innerHTML = 'Réessayer';
        found = true;


    }
    else {
        if (life > 0) {
            affect();
            dialog.innerHTML = badRes[Math.round(Math.random() * (badRes.length - 1))]
            console.log('rest');

        } else {
            reset();
        }
    }
}

function affect() {
    if (life > 0) {
        life -= 1;
        lives[life].style.filter = 'grayscale(1)';
        checkBtn.innerHTML = 'Réessayer';
        checkBtn.style.backgroundColor = "#ff4053";
        response.style.borderColor = "#ff4053";
        response.style.backgroundColor = "#ffc5ca";
    }
    if (life == 0) {
        response.setAttribute('disabled', 'true');
        dialog.innerHTML = "Perdu!\n Veuillez réessayer.\n😭";
    }
}

function reset() {
    lives.forEach(l => {
        l.style.filter = "grayscale(0)";
    });
    life = 3;
    dialog.innerHTML = "Devinez un nombre entre 1 et 10!"
    checkBtn.innerHTML = 'Vérifier';
    checkBtn.style.backgroundColor = "#2aa7fd";
    response.style.borderColor = "#2aa7fd";
    response.style.backgroundColor = "#e7f5fe";
    response.removeAttribute('disabled');
    response.value = null;
    found = false;
    n = Math.round(Math.random() * 10);
    console.log("The 'n' to find is :",n);
    
}


checkBtn.addEventListener('click', () => {
    if ((parseInt(response.value)) >= 0 && (parseInt(response.value)) <= 10) {
        if (found == true) {
            reset();
        } else {
            check();
        };

    } else {
        if (life > 0) {
            dialog.innerHTML = "😒.. \nEntrez un nombre entre 1 et 10 SVP.";
            affect();
        } else {
            reset()
        };
    };
});
addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        if ((parseInt(response.value)) >= 0 && (parseInt(response.value)) <= 10) {
            if (found == true) {
                reset();
            } else {
                check();
            };
        } else {
            if (life > 0) {
                dialog.innerHTML = "😒.. \nEntrez un nombre entre 1 et 10 SVP.";
                affect();
            } else {
                reset()
            }
        }
    }

})

// function reset() {
//     lives.forEach(l => {
//         l.style.filter = "grayscale(0)";
//     });
//     life = 3;
//     dialog.innerHTML = "Devinez un nombre entre 1 et 10!"
//     checkBtn.innerHTML = 'Vérifier';
//     checkBtn.style.backgroundColor = "#2aa7fd";
//     response.style.borderColor = "#2aa7fd";
//     response.style.backgroundColor = "#e7f5fe";
//     response.removeAttribute('disabled');
//     response.value = null;
//     // n = Math.round(Math.random() * 10);
//     found = false;
// }
// function affect() {
//     if (life > 0) {
//         life -= 1;
//         lives[life].style.filter = 'grayscale(1)';
//         checkBtn.innerHTML = 'Réessayer';
//         checkBtn.style.backgroundColor = "#ff4053";
//         response.style.borderColor = "#ff4053";
//         response.style.backgroundColor = "#ffc5ca";
//     }
//     if (life == 0) {
//         dialog.innerHTML = "Perdu!\n Veuillez réessayer.\n😭";
//     }


// }
// function checkResult(result) {
//     if (result == n) {
//         found = true;
//         dialog.innerHTML = goodRes[Math.round(Math.random() * (goodRes.length - 1))]
//         checkBtn.style.backgroundColor = "#40af0c";
//         response.style.borderColor = "#40af0c";
//         response.style.backgroundColor = "#ecf7e6";
//         response.setAttribute('disabled', 'true');
//         checkBtn.innerHTML = 'Réessayer';
//     } else {
//         dialog.innerHTML = badRes[Math.round(Math.random() * (badRes.length - 1))]
//         affect();
//     }
// };
// checkBtn.addEventListener('click', () => {
//     if ((parseInt(response.value)) >= 0 && (parseInt(response.value)) <= 10) {
//         if (found == false && life > 0) {
//             checkResult(parseInt(response.value));
//         }
//         else if (found == false) {
//             reset()
//         }
//         else {
//             reset();
//         }
//     } else {
//         if (life > 0) {
//             dialog.innerHTML = "😒.. \nEntrez un nombre entre 1 et 10 SVP.";
//             affect();
//         } else {
//             reset()
//         }
//     }
// });
// addEventListener('keydown', (e) => {
//     if (e.key == 'Enter') {
//         if ((parseInt(response.value)) >= 0 && (parseInt(response.value)) <= 10) {
//             if (found == false) {
//                 checkResult(parseInt(response.value));
//             }
//             else if (found == false && life == 0) {
//                 reset()
//             } else {
//                 reset();
//             }
//         } else {
//             if (life > 0) {
//                 dialog.innerHTML = "😒.. \nEntrez un nombre entre 1 et 10 SVP.";
//                 affect();
//             } else {
//                 reset()
//             }
//         }
//     }

// })


