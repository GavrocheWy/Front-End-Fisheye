//Mettre le code JavaScript lié à la page photographer.html

// Récupération des informations du photographe

async function getPhotographerInfos() {

    async function photographersInfosApi() {
        const getPhotographersApi = new SinglePhotographerApi('../../data/photographers.json').get()
        return getPhotographersApi
    }

    const photographerInfos = await photographersInfosApi()
    console.log('photographer infos :', photographerInfos)

    let photographer = []

    return photographer = photographerInfos

}

// Récupération des productions du photographe

async function getPhotographerProductions() {

    async function photographersProductionsApi() {
        const getPhotographersProductionsApi = new MediasApi('../../data/photographers.json').get()
        return getPhotographersProductionsApi
    }

    const photographerProductions = await photographersProductionsApi()
    console.log('photographer productions :', photographerProductions)

    let allPhotographerProductions = []

    return allPhotographerProductions = photographerProductions

}

async function displayData(photographer) {

    const photographersSection = document.querySelector(".photographer_section");

    const photographerModel = photographerFactory(photographer, 'singlepage');
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);

};

async function init() {
    const photographersInfos = await getPhotographerInfos();
    displayData(photographersInfos);

    const photographerProductions = await getPhotographerProductions();
};

init();