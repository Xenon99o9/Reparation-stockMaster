function category(produit,category){
    if (produit.cat == category){
        true
    }else{
        false
    }
}

async function updateEverything() {
    const container = document.getElementById('app');
    // On crée des données en dur à l'intérieur de la fonction
    //d'affichage
    //désincronise
    setTimeout(() => {


                    
        //créer les produit/groupes
        const produits = [
            { nom: "TV LED", prix: 400, cat: "Electronique" },
            { nom: "Micro-onde", prix: 120, cat: "Electromenager" },
            { nom: "Smartphone", prix: 800, cat: "Electronique" },
            { nom: "Lave-linge", prix: 300, cat: "Electromenager" },
            { nom: "Lave-bite", prix: 3000, cat: "Promotion" },
        ];
        container.innerHTML = ""; // On vide



        //créer la list
        produits.forEach(p => {
            const item = document.createElement('div');
            item.innerHTML = `Produit: ${p.nom} - Prix: ${p.prix}€`;
            // Logique de style mélangée au DOM

            if (p.cat === "Electronique") {
                item.style.fontWeight = "bold";
            }
            if (p.cat === "Promotion") {
                item.classList.add("promo")
                item.innerHTML = `Produit: ${p.nom} - Prix: ${p.prix}€ PROMO`;
            }
            //remplie la liste
            container.appendChild(item);
        });
    }, 1000); // on simule un appel API
}
// Lancement initial
updateEverything();