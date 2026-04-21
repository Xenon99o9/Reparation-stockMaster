let produits = [
            { nom: "TV LED", prix: 400, cat: "Electronique" },
            { nom: "Micro-onde", prix: 120, cat: "Electromenager" },
            { nom: "Smartphone", prix: 800, cat: "Electronique" },
            { nom: "Lave-linge", prix: 300, cat: "Electromenager" },
            { nom: "Lave-test", prix: 3000, cat: "Promotion" },
        ];

function category(produit,category){
    if (produit.cat == category){
        true
    } else {
        false
    }
}

function nouveauProduit(){
    const nom = getElementById('nom').value
    const prix = getElementById('prix').value
    const cat = getElementById('cat').value
    console.log(nom, prix, cat)
    produits.appendChild({"nom" : nom, "prix" : prix, "cat":cat })
    updateEverything()
}

document.getElementById('nouveauProduit').addEventListener('submit', (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    
    // Créez un objet FormData à partir du formulaire soumis
    const formData = new FormData(e.currentTarget);
    
    // Convertissez les données en un objet JavaScript simple
    const data = Object.fromEntries(formData);
    
    nom = data.nom
    prix = data.prix
    cat = data.cat
    produits.appendChild({"nom" : nom, "prix" : prix, "cat":cat })
    console.log(data)
    updateEverything()
});   

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