let produits = [
            { nom: "TV LED", prix: 400, cat: "Electronique" },
            { nom: "Micro-onde", prix: 120, cat: "Electromenager" },
            { nom: "Smartphone", prix: 800, cat: "Electronique" },
            { nom: "Lave-linge", prix: 300, cat: "Electromenager" },
            { nom: "Lave-test", prix: 3000, cat: "Promotion" },
        ];

function category(produit,category){
    if (produit.cat == category){
        return true;
    } else {
        return false;
    }
}

function nouveauProduit() {

    // Récupération des valeurs des champs
    const nom = document.getElementById('nom').value;
    const prix = document.getElementById('prix').value;
    const cat = document.getElementById('cat').value;
    // Validation simple
    if (!nom || !(prix) || !cat) {
        alert("Veuillez remplir tous les champs correctement.");
        return;
    }

    // Création du nouvel objet produit
    const produit = {
        nom: nom,
        prix: prix,
        cat: cat
    };

    // Ajout à la liste
    produits.push(produit);

    // Réinitialiser le formulaire
    document.getElementById('nom').value = '';
    document.getElementById('prix').value = '';
    document.getElementById('cat').value = '';

    // Fermer le formulaire
    toggleForm();
    updateEverything()
}   

 

async function updateEverything() {
    const container = document.getElementById('app');
    // On crée des données en dur à l'intérieur de la fonction
    //d'affichage
    //désincronise
    setTimeout(() => {
               
        //créer les produit/groupes
        
        container.innerHTML = ""; // On vide



        //créer la list
        produits.forEach(p => {
            const item = document.createElement('div');
            item.innerHTML = `Produit: ${p.nom} - Prix: ${p.prix}€`;
            // Logique de style mélangée au DOM

            if (p.cat === "Electronique") {
                item.style.fontWeight = "bold";
            }
            if (category(p,"Promotion")) {
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