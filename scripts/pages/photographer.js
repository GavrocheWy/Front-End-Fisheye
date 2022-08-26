// PARTIE RECUPERATION DES INFORMATIONS - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// Variables globales 

let photographerProductions = []

// Récupération des informations du photographe

async function getPhotographerInfos() {

    async function photographersInfosApi() {
        const getPhotographersApi = new SinglePhotographerApi('../../data/photographers.json').get()
        return getPhotographersApi
    }

    const photographer = await photographersInfosApi()

    // console.log('photographer infos :', photographer)

    return photographer

}

// Récupération des productions du photographe

async function getPhotographerProductions() {

    async function photographersProductionsApi() {
        const getPhotographersProductionsApi = new MediasApi('../../data/photographers.json').get()
        return getPhotographersProductionsApi
    }

    const getAllPhotographerProductions = await photographersProductionsApi()

    // console.log('photographer productions :', allPhotographerProductions)

    getAllPhotographerProductions.forEach(production => {
        production.isLiked = false;
    });

    return getAllPhotographerProductions

}

// PARTIE AFFICHAGE DES ELEMENTS - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// Affichage de l'entête de la page photographe singulière

async function displayData(photographerInfo) {

    // Section HTML Photographers

    const photographerSinglePage = document.querySelector("#main");

    // Affichage des photographes dans la section

    const photographerModel = photographerHeader(photographerInfo);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographerSinglePage.prepend(userCardDOM);

};

// Affichage des productions du photographe

async function displayProductions(photographerProductions) {

    // Section HTML Photographers

    const photographerSinglePage = document.querySelector("#main");
    const productionsSection = document.querySelector(".productions-section");

    // Affichage des photographes dans la section

    photographerProductions.forEach((production) => {

        const photographerProductionModel = mediaFactory(production);
        const prodCardDOM = photographerProductionModel.getProdCardDOM();
        productionsSection.appendChild(prodCardDOM);

    });

    // Envoi du nombre total de likes à la factory function priceFactory

    const photographePriceAndLikes = {
        price: photographerProductions[0].price,
        totalLikes: getTotalLikes()
    }

    function getTotalLikes() {

        let totalLikes = 0

        photographerProductions.forEach(production => { totalLikes += production.likes });

        return totalLikes

    }

    const photographePriceAndLikesCard = priceFactory(photographePriceAndLikes);
    const priceCardDOM = photographePriceAndLikesCard.getPriceCardDOM();

    photographerSinglePage.append(priceCardDOM);

};

// PARTIE INITIALISATION - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// Initialisation de la page

async function init() {

    const photographersInfos = await getPhotographerInfos();
    displayData(photographersInfos);
    photographerProductions = await getPhotographerProductions();
    displayProductions(photographerProductions);

    // MODELS
    
    sortForm()

    // ACTIONS 

    refreshProductionsGrid()
    
};

init();

