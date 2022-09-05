class myRecette{
    constructor(pId, pName, pServings, pIngredients, pTime, pDescription, pAppliance, pUstensils){
        this.aId = pId
        this.aName = pName.toLowerCase()
        this.aServings = pServings
        this.aIngredient = pIngredients
        this.aTime = pTime
        this.aDescription = pDescription.toLowerCase()
        this.aAppliance = pAppliance.toLowerCase()
        this.aUstensils = pUstensils
    }

     
    searchWord(pWord){
        pWord = pWord.toLowerCase();
        
        if(this.aName.indexOf(pWord) > -1){
            return true
        }

        if(this.aDescription.indexOf(pWord) > -1){
            return true
        }

        if(this.aAppliance.indexOf(pWord) > -1){
            return true
        }

        if(this.aUstensils.indexOf(pWord) > -1){
            return true
        }

        for (let index = 0; index < this.aIngredient.length; index++) {
            if(this.aIngredient[index].ingredient.indexOf(pWord) > -1){
                return true
            }
        }

        return false

        // let arrayData = ['1',2,'coco','lait'];
        // const wordSearch = 'lait';

        // let arrayDataConcat = arrayData.join('_');

        // let results = arrayDataConcat.includes(wordSearch);

        // console.log('resultat : ' + results);

        // console.log(pWord);

    }
    
    getFormatedDescription(){
        var chaine = this.aDescription;

        if (chaine.length > 175) {
            return chaine.slice(0, 175) + '...';
        }

        else{
            return chaine;
        }
    }


    addTagMenus(){
        // la methode addTagMenus prends les noms des ingredients dans lobjet et les ajoute aux tableaux ingredientsTab.appareilsTab.ustensilsTab

        for (let index = 0; index < this.aIngredient.length; index++) {

            ingredientsTab.push(this.aIngredient[index].ingredient)
            
        }

        appareilsTab.push(this.aAppliance)

        for (let index = 0; index < this.aUstensils.length; index++) {

            ustensilsTab.push(this.aUstensils[index])

        }

    }


    addHtmlCode(){

    var recettes = document.getElementsByClassName('recettes');

    var recetteItem = document.createElement('div');   
    recetteItem.setAttribute('class','recettes__item');
    recettes[0].appendChild(recetteItem);

    // div recette item Photo
    const recettes__itemPhoto = document.createElement('div');   
    recettes__itemPhoto.setAttribute('class','recettes__item--photo');
    recetteItem.appendChild(recettes__itemPhoto);

    // div recette item Photo Illu
    const recettes__itemIllu = document.createElement('img');   
    recettes__itemIllu.setAttribute('class','recettes__item--illu');
    recettes__itemPhoto.appendChild(recettes__itemIllu);

    // div recette item composants
    const recettes__itemComposants = document.createElement('div');   
    recettes__itemComposants.setAttribute('class','recettes__item--composants');
    recetteItem.appendChild(recettes__itemComposants);

    // div recette item composants Name
    const recettes__itemComposantsName = document.createElement('div');   
    recettes__itemComposantsName.setAttribute('class','recettes__item--composantsName');
    recettes__itemComposants.appendChild(recettes__itemComposantsName);

    // div recettes item composants Name Para
    const recettes__itemComposantsNamePara = document.createElement('p');   
    recettes__itemComposantsNamePara.setAttribute('class','recettes__item--composantsNamePara')
    recettes__itemComposantsNamePara.innerHTML = (this.aName);
    recettes__itemComposantsName.appendChild(recettes__itemComposantsNamePara);

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
    recettes__itemComposantsHorlogeIcone.setAttribute('class','recettes__item--composantsHorlogeIcone');
    recettes__itemComposantsHorlogeIcone.setAttribute('src',`./images/Time.png`);
    recettes__itemComposantsHorloge.appendChild(recettes__itemComposantsHorlogeIcone);


    // div recette item composants Horloge Para
    const recettes__itemComposantsHorlogePara = document.createElement('p');   
    recettes__itemComposantsHorlogePara.setAttribute('class','recettes__item--composantsHorlogePara')
    recettes__itemComposantsHorlogePara.innerHTML = (this.aTime + 'mn');
    recettes__itemComposantsHorloge.appendChild(recettes__itemComposantsHorlogePara);

    // div recette item Composants Liste
    // code a executer pour chaque ingredient
    const recettes__itemComposantsListe = document.createElement('div');   
    recettes__itemComposantsListe.setAttribute('class','recettes__item--composantsListe')
    var totalIngredients = '';
    for (let index = 0; index < this.aIngredient.length; index++) {
        totalIngredients = totalIngredients + this.aIngredient[index].ingredient
        
        if(typeof this.aIngredient[index].quantity !== 'undefined'){
            totalIngredients = totalIngredients + ':' + ' ' + this.aIngredient[index].quantity
        }

        if(typeof this.aIngredient[index].unit !== 'undefined'){
            totalIngredients = totalIngredients + ' ' + this.aIngredient[index].unit.replace('grammes', 'g')
        }
        
        totalIngredients = totalIngredients + '<br>';

    }
    recettes__itemComposantsListe.innerHTML = (totalIngredients);
    recettes__itemComposants.appendChild(recettes__itemComposantsListe);

    // div recette item composant Method
    const recettes__itemComposantsMethod = document.createElement('div');   
    recettes__itemComposantsMethod.setAttribute('class','recettes__item--composantsMethod')
    recettes__itemComposants.appendChild(recettes__itemComposantsMethod);

    // div recette item composant Method Para
    const recettes__itemComposantsMethodPara = document.createElement('p');   
    recettes__itemComposantsMethodPara.setAttribute('class','recettes__item--composantsMethodPara')
    recettes__itemComposantsMethodPara.innerHTML = (this.getFormatedDescription());
    recettes__itemComposantsMethod.appendChild(recettes__itemComposantsMethodPara);

    }

}



class searchSequence{

    constructor(pWord, pSearchTime, pTotalResult, pTagIngActu, pTagAppActu, pTagIUstActu,pSearchResult){
        this.aWord = pWord.toLowerCase()
        this.aSearchTime = pSearchTime
        this.aTotalResult = pTotalResult
        this.aTagIngActu = pTagIngActu
        this.aTagAppActu = pTagAppActu
        this.aTagIUstActu = pTagIUstActu
        this.aSearchResult = pSearchResult
    }

}




var recetteTab = [];

var ingredientsTab = [];

var appareilsTab = [];

var ustensilsTab = [];

var currentWordSearchTab =[];


// Fonction qui permet de generer des objets recette puis de les afficher via la methode de l'objet myRecette

function recetteFactory(){

// Generation des objets recette


    for (let index = 0; index < recipes.length; index++) {

        var ficheRecette = new myRecette (recipes[index].id, recipes[index].name, recipes[index].servings, recipes[index].ingredients, recipes[index].time, recipes[index].description, recipes[index].appliance, recipes[index].ustensils)

        // Stockage des objets recette
        
        recetteTab.push(ficheRecette);

        // affichage de la fiche recette a partir de la methode instanciée dans l'objet myRecette

        ficheRecette.addHtmlCode();
      
    }

}

recetteFactory();


// Fonction qui parcourt le tableau recetteTab et appelle la methode addTagMenus

function tagFactory() { 
    
    for (let index = 0; index < recetteTab.length; index++) {

        recetteTab[index].addTagMenus();
        
    }
}

tagFactory();



var filteredIngredientsTab = ingredientsTab.filter(function(element, position){
    return ingredientsTab.indexOf(element) == position;
})

var filteredAppliancesTab = appareilsTab.filter(function(element, position){
    return appareilsTab.indexOf(element) == position;
})

var filteredUstensilsTab = ustensilsTab.filter(function(element, position){
    return ustensilsTab.indexOf(element) == position;
})

var filteredCurrentWordSearchTab = [];


// Fonction d'affichage des div sous les menus tags

function affichageTag() {

    // div menu tag Ingredients

    const menu__tagIngredient = document.getElementsByClassName('menu__tag--contenuIng'); 
    
    for (let index = 0; index < filteredIngredientsTab.length; index++) {

        const ingredientPara = document.createElement('p');   
        ingredientPara.setAttribute('class','menu__tag--contenuIngPara');
        
        ingredientPara.addEventListener("click", () => { 
            selectionOpen(filteredIngredientsTab[index]);
        });

        ingredientPara.innerHTML = filteredIngredientsTab[index];
        menu__tagIngredient[0].appendChild(ingredientPara);

    }
    

    // div menu tag Appliances

    const menu__tagAppliance = document.getElementsByClassName('menu__tag--contenuApp'); 


    for (let index = 0; index < filteredAppliancesTab.length; index++) {

        const appliancePara = document.createElement('p');   
        appliancePara.setAttribute('class','menu__tag--contenuAppPara');

        appliancePara.addEventListener("click", () => { 
            selectionOpen(filteredAppliancesTab[index]);
        });

        appliancePara.innerHTML = filteredAppliancesTab[index];
        menu__tagAppliance[0].appendChild(appliancePara);
    }

    // div menu tag Ustensiles

    const menu__tagUstensils = document.getElementsByClassName('menu__tag--contenuUst'); 


    for (let index = 0; index < filteredUstensilsTab.length; index++) {

        const ustensilsPara = document.createElement('p');   
        ustensilsPara.setAttribute('class','menu__tag--contenuUstPara');

        ustensilsPara.addEventListener("click", () => { 
            selectionOpen(filteredUstensilsTab[index]);
        });

        ustensilsPara.innerHTML = filteredUstensilsTab[index];
        menu__tagUstensils[0].appendChild(ustensilsPara);

    }
    

}

affichageTag();



// Fonction qui permet l'affichage des div de selection des menus tags + evenement de fermeture d'une div

function afficheCurrentTagTab(){

    // Appel de la div principale

    const resultat = document.getElementsByClassName("resultat");

    // vidage div avant de reafficher la tableau

    resultat[0].innerHTML = '';

    for (let index = 0; index < filteredCurrentWordSearchTab.length; index++) {

    // div itemSelection
    const itemSelection = document.createElement('div');   
    itemSelection.setAttribute('class','resultat__item');

    // div texte
    const itemSelectionTexte = document.createElement('div');   
    itemSelectionTexte.setAttribute('class','resultat__texte')
    itemSelectionTexte.innerHTML = (filteredCurrentWordSearchTab[index]);
    itemSelection.appendChild(itemSelectionTexte);

    // div icone
    const itemSelectionIcone = document.createElement('i');   
    itemSelectionIcone.setAttribute('class','fas fa-times-circle resultat__croix');
    itemSelectionIcone.addEventListener("click", () => { 
        selectionClose(itemSelection);
        delSearchEntry(filteredCurrentWordSearchTab[index]);
    });
    itemSelection.appendChild(itemSelectionIcone);

    resultat[0].appendChild(itemSelection);

    itemSelection.style.display = "block"; 
    itemSelection.style.display = "flex";

    }

}


afficheCurrentTagTab();



// Fonction qui permet de supprimer une item du tableau currentWordSearchTab

function delSearchEntry(pEntryToDel){
    var myIndex = currentWordSearchTab.indexOf(pEntryToDel);
    
    if (myIndex !== -1) {
        currentWordSearchTab.splice(myIndex, 1);
    }
    
}



function afficheResult(){

    console.log(tabResult);

    var recettes = document.getElementsByClassName('recettes');

    recettes[0].innerHTML = '';
    
    for (let index = 0; index < tabResult.length; index++) {

        tabResult[index].addHtmlCode();
        
    }   

}











