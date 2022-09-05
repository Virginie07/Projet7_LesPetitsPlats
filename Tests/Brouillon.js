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
