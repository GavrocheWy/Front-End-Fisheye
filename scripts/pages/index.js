async function getPhotographers() {
    // Penser à remplacer par les données récupérées dans le json

    async function photographersApi() {
        const getPhotographersApi = new AllPhotographersApi('../../data/photographers.json').get()
        return getPhotographersApi
    }

    const photographers = await photographersApi()

    // et bien retourner le tableau photographers seulement une fois
    
    let allPhotographers = []

    return allPhotographers = photographers
    
}

async function displayData(photographers) {

    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer, 'homepage');
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });

};

async function init() {
    // Récupère les datas des photographes
    const photographersInfos = await getPhotographers();
    console.log(photographersInfos)
    displayData(photographersInfos);
};

init();
