function secondSearchFunction(pWord) {

    for (let index = 0; index < recipes.length; index++) {
        // console.log(recipes[index].ingredients);
    
        var nameRecup = recipes[index].name;
        var ingTabRecup = recipes[index].ingredients;      
        var descRecup = recipes[index].description;    
        var appRecup = recipes[index].appliance;
        var ustTabRecup = recipes[index].ustensils;
        for (let i = 0; i < ingTabRecup.length; i++) {        
            var ingRecup = ingTabRecup[i].ingredient;     
        }
        for (let i = 0; i < ustTabRecup.length; i++) {
            var ustFirstRecup = recipes[index].ustensils;
            var ustRecup = ustFirstRecup.toString(); 
        }
    
        if(nameRecup.indexOf(pWord) > -1){
            return true
        }

        if(ingRecup.indexOf(pWord) > -1){
            return true
        }

        if(descRecup.indexOf(pWord) > -1){
            return true
        }

        if(appRecup.indexOf(pWord) > -1){
            return true
        }

        if(ustRecup.indexOf(pWord) > -1){
            return true
        }
       
        // console.log(nameRecup);
        // console.log(ingRecup);
        // console.log(descRecup);
        // console.log(appRecup);
        // console.log(ustRecup);
    
    
    }    
}

secondSearchFunction();


