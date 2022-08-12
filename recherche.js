function searchFunction(pWord){
    // parcourir recetteTab
    // pour chaque index du tableau (chaque ficheRecette) on se sert de la methode searchWord pour verifier
    // si la fiche recette contient le mot on l'affiche sur la console

    for (let index = 0; index < recetteTab.length; index++) {

        console.log(recetteTab[index].searchWord(pWord));
         
    }
    
    
}


