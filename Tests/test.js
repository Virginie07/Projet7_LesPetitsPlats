class Recette{
    constructor(pId, pName, pServings, pTime, pDescription, pAppliance){
        this.aId = pId
        this.aName = pName
        this.aServings = pServings
        this.aTime = pTime
        this.aDescription = pDescription
        this.aAppliance = pAppliance
    }

    printMe(){
        console.log(this.aTime + "mn")
    }
}


var vId = '1';
var vName = 'Limonade de coco';
var vServings = '2';
var vTime = '10';
var vDescription = 'blabla';
var vAppliance = 'Blender';

var oLimonade = new Recette(vId, vName, vServings, vTime, vDescription, vAppliance);

oLimonade.printMe();



// div recette item Photo
const recettes__itemPhoto = document.createElement('div');   
recettes__itemPhoto.setAttribute('class','recettes__item--photo')
recettes__itemPhoto.innerHTML = ('');
recetteItem.appendChild(recettes__itemPhoto);

// div recette item Photo Illu
const recettes__itemIllu = document.createElement('img');   
recettes__itemIllu.setAttribute('class','recettes__item--illu')
recettes__itemIllu.innerHTML = ('');
recettes__itemPhoto.appendChild(recettes__itemIllu);


// ...............................................................................


// div recette item composants
const recettes__itemComposants = document.createElement('div');   
recettes__itemComposants.setAttribute('class','recettes__item--composants');
recetteItem.appendChild(recettes__itemComposants);


// .................

// div recette item composants Name
const recettes__itemComposantsName = document.createElement('div');   
recettes__itemComposantsName.setAttribute('class','recettes__item--composantsName');
recettes__itemComposants.appendChild(recettes__itemComposantsName);

// div recettes item composants Name Para
const recettes__itemComposantsNamePara = document.createElement('p');   
recettes__itemComposantsNamePara.setAttribute('class','recettes__item--composantsNamePara')
recettes__itemComposantsNamePara.innerHTML = ('');
recettes__itemComposantsName.appendChild(recettes__itemComposantsNamePara);

// .................


// div recette item composants Time
const recettes__itemComposantsTime = document.createElement('div');   
recettes__itemComposantsTime.setAttribute('class','recettes__item--composantsTime')
recettes__itemComposants.appendChild(recettes__itemComposantsTime);

// div recette item composants Horloge
const recettes__itemComposantsHorloge= document.createElement('div');   
recettes__itemComposantsHorloge.setAttribute('class','recettes__item--composantsHorloge')
recettes__itemComposantsTime.appendChild(recettes__itemComposantsHorloge);


// div recette item composants Horloge Icone
const recettes__itemComposantsHorlogeIcone = document.createElement('img');   
recettes__itemComposantsHorlogeIcone.setAttribute('class','recettes__item--composantsHorlogeIcone')
recettes__itemComposantsHorloge.appendChild(recettes__itemComposantsHorlogeIcone);


// div recette item composants Horloge Para
const recettes__itemComposantsHorlogePara = document.createElement('p');   
recettes__itemComposantsHorlogePara.setAttribute('class','recettes__item--composantsHorlogePara')
recettes__itemComposantsHorlogePara.innerHTML = ('');
recettes__itemComposantsTime.appendChild(recettes__itemComposantsHorlogePara);


// ..................


// div recette item composant List
const recettes__itemComposantsListe = document.createElement('div');   
recettes__itemComposantsListe.setAttribute('class','recettes__item--composantsListe')
recettes__itemComposantsListe.innerHTML = ('');
recettes__itemComposants.appendChild(recettes__itemComposantsListe);

// ...................


// div recette item composant Method
const recettes__itemComposantsMethod = document.createElement('div');   
recettes__itemComposantsMethod.setAttribute('class','recettes__item--composantsMethod')
recettes__itemComposantsMethod.innerHTML = ('');
recettes__itemComposants.appendChild(recettes__itemComposantsMethod);

// div recette item composant Method Para
const recettes__itemComposantsMethodPara = document.createElement('p');   
recettes__itemComposantsMethodPara.setAttribute('class','recettes__item--composantsMethodPara')
recettes__itemComposantsMethodPara.innerHTML = ('');
recettes__itemComposantsMethod.appendChild(recettes__itemComposantsMethodPara);



for (let index = 0; index < recipes.length; index++) {

    // code a executer
}


var index = 0;
while (index < recipes.length) {
    // code a executer

    index++
    
}


