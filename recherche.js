
var tabResult = [];
var interTabResult = [];

function searchFunction(pWord){
    // parcourir recetteTab
    // pour chaque index du tableau (chaque ficheRecette) on se sert de la methode searchWord pour verifier
    // si la fiche recette contient le mot on l'affiche sur la console

    // 1: si 3 caract entrés ou + la recherche se lance
    // 2: si strictement = a 3 caracteres, tab de reference soit tabResult = recetteTab
    // 3: on cherche dans le tab de reference (tabResult) et on range dans un tab intermediaire
    // 4: tabResult = tab intermediaire


    if (pWord.length >= 3) {
        
        if (pWord.length === 3) {
            tabResult = recetteTab;
        }

        for (let index = 0; index < tabResult.length; index++) {

            var recetteResult = tabResult[index].searchWord(pWord);
    
            if (recetteResult === true) {
                   
                interTabResult.push (tabResult[index])
        
            }
             
        }

        tabResult = interTabResult;
    }

    afficheResult();

}











    // for (let index = 0; index < recetteTab.length; index++) {

    //     var recetteResult = recetteTab[index].searchWord(pWord);

    //     if (recetteResult === true) {

            
    //         tabResult.push (recetteTab[index])
    
    //     }
         
    // }

   
    
    // console.log(tabResult);
