//Mettre le code JavaScript lié à la page photographer.html

// Récupération des informations du photographe

async function getPhotographerInfos() {

    async function photographersInfosApi() {
        const getPhotographersApi = new SinglePhotographerApi('../../data/photographers.json').get()
        return getPhotographersApi
    }

    const photographer = await photographersInfosApi()

    console.log('photographer infos :', photographer)

    return photographer

}

// Récupération des productions du photographe

async function getPhotographerProductions() {

    async function photographersProductionsApi() {
        const getPhotographersProductionsApi = new MediasApi('../../data/photographers.json').get()
        return getPhotographersProductionsApi
    }

    const allPhotographerProductions = await photographersProductionsApi()
    
    console.log('photographer productions :', allPhotographerProductions)

    return allPhotographerProductions

}

// Initialisation de la page

async function init() {
    const photographersInfos = await getPhotographerInfos();
    const photographerProductions = await getPhotographerProductions();
};

init();