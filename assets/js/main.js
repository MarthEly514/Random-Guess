
const checkBtn = document.getElementById('check-res');
const dialog = document.getElementById('dialog');
const l1 = document.getElementById('l1');
const l2 = document.getElementById('l2');
const l3 = document.getElementById('l3');
const score = document.getElementById('score');
const hint = document.getElementById('hint');
const loading = document.getElementById('ld');
const startbtn = document.getElementById('startbtn');
const response = document.getElementById('response');
let sc = 0;
let inc = 15;
let badRes = ["Aie! Réessayez", "Oups! Encore", "Oh non! Veuillez réessayer", "☹️, Réessayez"];
let goodRes = ["😀 Hourra! Trouvé", "😁 Super!", "Prediction efficace! 🙇‍♂️"]
let lives = [l1, l2, l3];
let n = Math.round(Math.random() * 9);
let life = 3;
let found = false;
let hintContent = n % 2 == 0 ? "Indice: c'est un nombre pair." : "Indice: c'est un nombre impair.";
hint.innerText = hintContent;
console.log("The 'n' to find is :", n);

function begin() {
    setTimeout(() => {
        loading.style.display = 'none';
        console.log('loaded');
    }, 2000);
}
startbtn.addEventListener('click', () => {
    startbtn.innerHTML = "Chargement..."
    begin();
})
function check() {
    if (n == parseInt(response.value)) {
        dialog.innerHTML = goodRes[(Math.floor(Math.random() * (goodRes.length - 1)))]
        checkBtn.style.backgroundColor = "#40af0c";
        response.style.borderColor = "#40af0c";
        response.style.backgroundColor = "#ecf7e6";
        response.setAttribute('disabled', 'true');
        checkBtn.innerHTML = 'Réessayer';
        sc += inc;
        found = true;


    }
    else {
        if (life > 0) {
            affect();
            dialog.innerHTML = badRes[Math.floor(Math.random() * (badRes.length - 1))]
        } else {
            reset();
        }
    }
}

function affect() {
    if (life > 0) {
        life -= 1;
        inc -= 5;
        lives[life].style.filter = 'grayscale(1)';
        checkBtn.innerHTML = 'Réessayer';
        checkBtn.style.backgroundColor = "#ff4053";
        response.style.borderColor = "#ff4053";
        response.style.backgroundColor = "#ffc5ca";
        response.value = '';

    }
    if (life == 0) {
        response.setAttribute('disabled', 'true');
        dialog.innerHTML = "Perdu!\n Veuillez réessayer.\n😭";
        hint.innerText = `Le chiffre correct était ${n}`;
    }
}

function reset() {
    lives.forEach(l => {
        l.style.filter = "grayscale(0)";
    });
    life = 3;
    inc = 15;
    dialog.innerHTML = "Devinez un nombre entre 0 et 9!"
    checkBtn.innerHTML = 'Vérifier';
    checkBtn.style.backgroundColor = "#2aa7fd";
    response.style.borderColor = "#2aa7fd";
    response.style.backgroundColor = "#e7f5fe";
    response.removeAttribute('disabled');
    response.value = null;
    found = false;
    n = Math.round(Math.random() * 9);
    hintContent = n % 2 == 0 ? "Indice: c'est un nombre pair." : "Indice c'est un nombre impair.";
    hint.innerText = hintContent;
    console.log("The 'n' to find is :", n);

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
            dialog.innerHTML = "😒.. \nEntrez un nombre entre 0 et 9 SVP.";
            affect();
        } else {
            reset()
        };
    };
    score.innerText = "Score: " + sc.toString();

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
                dialog.innerHTML = "😒.. \nEntrez un nombre entre 0 et 9 SVP.";
                affect();
            } else {
                reset()
            }
        }
    }
    score.innerText = "Score: " + sc.toString();


})



