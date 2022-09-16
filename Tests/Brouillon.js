// Creation des tableaux des menus tag, avant factorisation

// Methode...............................

class myRecette{

    addTabIngredients(){
            // la methode addTabIngredients prends les noms des ingredients dans lobjet et les ajoute au tableau ingredientsTab

        for (let index = 0; index < this.aIngredient.length; index++) {

                ingredientsTab.push(this.aIngredient[index].ingredient)
                
        }
    }

    addTabAppareils(){
            // la methode addTabAppareils prends les noms des ingredients dans lobjet et les ajoute au tableau appareilTab

        appareilsTab.push(this.aAppliance)

    }

    addTabUstensils(){
            // la methode addTabAppareils prends les noms des ingredients dans lobjet et les ajoute au tableau appareilTab

        for (let index = 0; index < this.aUstensils.length; index++) {

            ustensilsTab.push(this.aUstensils[index])

        }

    }


}

// Fonction..............................


function ingredientFactory() {

    // doit parcourir le tableau recetteTab et appeler la methode addIngredientTab 
    
    for (let index = 0; index < recetteTab.length; index++) {

        recetteTab[index].addTabIngredients();
        
    }
}

ingredientFactory();


function appareilsFactory() {

    // doit parcourir le tableau recetteTab et appeler la methode addIngredientTab 
    
    for (let index = 0; index < recetteTab.length; index++) {

        recetteTab[index].addTabAppareils();
        
    }
}

appareilsFactory();


function ustensilsFactory() {

    // doit parcourir le tableau recetteTab et appeler la methode addIngredientTab 
    
    for (let index = 0; index < recetteTab.length; index++) {

        recetteTab[index].addTabUstensils();
        
    }
}

ustensilsFactory();


console.log(ingredientsTab);
console.log(appareilsTab);
console.log(ustensilsTab);



// addIngredients(){
    //     var listIng = '';
   
    //     for(let index = 0; index <this.aIngredient.length; index++) {

    //         listIng = listIng + this.aIngredient[index].ingredient

    //     }

    //     listIng = listIng + '<br>';

    //     return listIng;
    // }



// Fonction d'affichage des tags non factorisée

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



// if (pWord.length >= 3) {
              
//     console.log(tabResult);
//     var tmpTabResult = [];

//     if (pWord.length === 3) {
//         tabResult = recetteTab;
//     }

//     for (let index = 0; index < tabResult.length; index++) {

//         var recetteResult = tabResult[index].searchWord(pWord); 

//         if (recetteResult === true) {
                           
//             tmpTabResult.push (tabResult[index])
    
//         }
         
//     }

//     tabResult = tmpTabResult;

//     afficheResult(tabResult);
// }

