// tady je místo pro náš program
let odstavec = document.querySelector('.odstavec')

function zacerveni() {
    odstavec.classList.toggle('odstavec-cerveny');
}

function ztucni() {
    odstavec.style.fontWeight=800;
}

function zvetsi(udalost) {

    let pixely = getComputedStyle(odstavec).fontSize;
    // od delky si odectu px
    let delka = pixely.length-2;
    // ulozim si jen cislo bex px
    let pixely_cislo = pixely.substring(0, delka);
    // zvetsim velikost o 1
    let zvetsene = Number(pixely_cislo)+1;
    
    // console.log(zvetsene);
    // nastavim styl
    odstavec.style.fontSize=zvetsene+'px';
}

let prehravac = document.querySelector('#zvuk');

function hraj(){
    prehravac.play();
    console.log(prehravac);
}

function resetni(){
    prehravac.currentTime = 0;
}

function pausni(){
    prehravac.pause ();
}

function hlasitost(stupen){
    prehravac.volume=stupen;
}


