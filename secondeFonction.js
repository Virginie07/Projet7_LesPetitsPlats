function secondSearchFunction(pWord) {
    tabIndex =[];


    for (let index = 0; index < recipes.length; index++) {
        // console.log(recipes[index].ingredients);
        searchDetect = -1;
        var nameRecup = recipes[index].name;
        var ingTabRecup = recipes[index].ingredients;      
        var descRecup = recipes[index].description;    
        var appRecup = recipes[index].appliance;
        var ustRecup = recipes[index].ustensils.toString();

        for (let i = 0; i < ingTabRecup.length; i++) {        
            var ingRecup = ingTabRecup[i].ingredient; 
            if(ingRecup.indexOf(pWord) > -1){
                searchDetect = 0
            }    
        }
        
        if(nameRecup.indexOf(pWord) > -1){
            searchDetect = 0
        }

        if(descRecup.indexOf(pWord) > -1){
            searchDetect = 0
        }

        if(appRecup.indexOf(pWord) > -1){
            searchDetect = 0
        }

        if(ustRecup.indexOf(pWord) > -1){
            searchDetect = 0
        }

        if (searchDetect == 0) {
            tabIndex.push(index)           
            // console.log(recipes[index]);
            // console.log(tabIndex); 
        }
    }  
    console.log(tabIndex);
    return tabIndex;
     

}

secondSearchFunction('coco');






function secondSearchFunction(pWord) {


    for (let index = 0; index < recipes.length; index++) {
        // console.log(recipes[index].ingredients);
        searchDetect = -1;
        var nameRecup = recipes[index].name;
        var ingTabRecup = recipes[index].ingredients;      
        var descRecup = recipes[index].description;    
        var appRecup = recipes[index].appliance;
        var ustRecup = recipes[index].ustensils.toString();

        for (let i = 0; i < ingTabRecup.length; i++) {        
            var ingRecup = ingTabRecup[i].ingredient; 
            if(ingRecup.indexOf(pWord) > -1){
                searchDetect = 0
            }    
        }
        
        if(nameRecup.indexOf(pWord) > -1){
            searchDetect = 0
        }

        if(descRecup.indexOf(pWord) > -1){
            searchDetect = 0
        }

        if(appRecup.indexOf(pWord) > -1){
            searchDetect = 0
        }

        if(ustRecup.indexOf(pWord) > -1){
            searchDetect = 0
        }

        if (searchDetect == 0) {
            tabIndex.push(index)           
            // console.log(recipes[index]);
            // console.log(tabIndex); 
        }
    }  
    console.log(tabIndex);
    return tabIndex;
     

}

secondSearchFunction('coco');





