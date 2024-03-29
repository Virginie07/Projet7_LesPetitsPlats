// MENU DEROULANT.................................................

// const allChevron = document.querySelectorAll('.menu__tag--itemChevron');

// allChevron.forEach(element => {
//      element.addEventListener('click', event => {
//          if (element.classList.contains("chevronIng")) {
//             contenuIngTag[0].style.display = "block"; 
//          }
//     });
// });

  
const contenuIngTag = document.getElementsByClassName('menu__tag--contenuIng');
const contenuAppTag = document.getElementsByClassName('menu__tag--contenuApp');
const contenuUstTag = document.getElementsByClassName('menu__tag--contenuUst');
const contenuTag = document.getElementsByClassName('menu__tag--contenu');

const chevronIng = document.querySelector(".chevronIng");
const chevronApp = document.querySelector(".chevronApp");
const chevronUst = document.querySelector(".chevronUst");

// const closeCrossIng = document.querySelector(".closeIng");
// const closeCrossApp = document.querySelector(".closeApp");
// const closeCrossUst = document.querySelector(".closeUst");

    // Evenements

chevronIng.addEventListener("click", menuTagIngOpen);
chevronApp.addEventListener("click", menuTagAppOpen);
chevronUst.addEventListener("click", menuTagUstOpen);

// closeCrossIng.addEventListener("click", menuTagIngClose);
// closeCrossApp.addEventListener("click", menuTagAppClose);
// closeCrossUst.addEventListener("click", menuTagUstClose);
 
    // Fonction pour ouvrir le menu tag

function menuTagIngOpen(){
    contenuIngTag[0].style.display = "block";  
    contenuIngTag[0].style.display = "flex";  
}

function menuTagAppOpen(){
    contenuAppTag[0].style.display = "block";  
    contenuAppTag[0].style.display = "flex";  
}

function menuTagUstOpen(){
    contenuUstTag[0].style.display = "block"; 
    contenuUstTag[0].style.display = "flex"; 
}

// Fonction pour fermer le menu tag

function menuTagClose(){
    contenuTag[0].style.display = "none";
}


// Encart selection item menu Tag



function selectionOpen(pWordSelect){


    currentWordSearchTab.push(pWordSelect);
    filteredCurrentWordSearchTab = currentWordSearchTab.filter(function(element, position){
        return currentWordSearchTab.indexOf(element) == position;
    })

    afficheCurrentTagTab();

    currentTabString = stringFunction(filteredCurrentWordSearchTab);
    console.log(currentTabString);
    
    var globalSearch = '';
    if (wordToUse != '') {
        globalSearch = wordToUse + '+' + currentTabString
    }
    else{
        globalSearch = currentTabString
    }
    
    searchFunction(globalSearch);
    console.log(globalSearch);
    // console.log('essai click' + pWordSelect);
    // console.log(currentWordSearchTab);
}


function selectionClose(pItemToClose){
    
    pItemToClose.style.display = 'none';
}


// Barre de recherche

const selectElement = document.getElementById('searchBarre');

selectElement.addEventListener('input', (event) => {
    wordToUse = event.target.value;
    searchFunction(wordToUse);
    console.log(event.target.value);
});