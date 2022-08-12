class myRecette{
    constructor(pId, pName, pServings, pmyIngredients, pTime, pDescription, pAppliance, pUstensils){
        this.aId = pId
        this.aName = pName.toLowerCase()
        this.aServings = pServings
        this.aIngredient = pmyIngredients
        this.aTime = pTime
        this.aDescription = pDescription.toLowerCase()
        this.aAppliance = pAppliance.toLowerCase()
        this.aUstensils = pUstensils
    }

    // printMe() {
    //     return('Nom de la recette:' + this.aName + 'Durée:' + this.aTime + 'mn');
    // }
     
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

        let arrayData = ['1',2,'coco','lait'];
        const wordSearch = 'co lait';

        let arrayDataConcat = arrayData.join('_');

        let results = arrayDataConcat.includes(wordSearch);

        // console.log('resultat : ' + results);

        // console.log(pWord);




        // for (let index = 0; index < recipes.ingredient.length; index++) {
        //     if(ingredient[index].indexOf(pWord) > -1){
        //         return 'Here'
        //     }
        // }
       

        return 'je suis pas la'
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

    // addIngredients(){
    //     var listIng = '';
   
    //     for(let index = 0; index <this.aIngredient.length; index++) {

    //         listIng = listIng + this.aIngredient[index].ingredient

    //     }

    //     listIng = listIng + '<br>';

    //     return listIng;
    // }

    addTabIngredients(){
        // la methode addTabIngredients prends les noms des ingredients dans la fiche recette et les ajoute au tableau ingredientsTab

        for (let index = 0; index < recipes[index].ingredients.length; index++) {

            ingredientsTab.push(recipes[index].ingredients.ingredient)

            console.log(ingredientsTab);
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

    // div menu tag Ingredients
    // const menu__tagIngredient = document.getElementsByClassName('menu__tag--contenuIng');

    // menu__tagIngredient[0].innerHTML = this.addIngredients();

    // console.log(this.addIngredients());

    }

}



var recetteTab = [];

var ingredientsTab = [];

function recetteFactory(){

// Generation des objets recette


    for (let index = 0; index < recipes.length; index++) {

        var ficheRecette = new myRecette (recipes[index].id, recipes[index].name, recipes[index].servings, recipes[index].ingredients, recipes[index].time, recipes[index].description, recipes[index].appliance, recipes[index].ustensils)

        // Stockage des objets recette
        
        recetteTab.push(ficheRecette);

        // affichage de la fiche recette a partir de la methode instanciée dans l'objet myRecette

        ficheRecette.addHtmlCode();


        // affichage des ingredients

        // console.log(ficheRecette.aIngredient);  

       
    }

}

recetteFactory();




function ingredientFactory() {


    // doit parcourir le tableau recetteTab et appeler la methode addIngredientTab 
    
    for (let index = 0; index < recetteTab[index].length; index++) {

        recetteTab.addTabIngredients();
        
    }

    
}

ingredientFactory();


console.log(ingredientsTab);










