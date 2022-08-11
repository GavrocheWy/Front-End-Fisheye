async function getPhotographers() {
    // Penser à remplacer par les données récupérées dans le json

    async function photographersApi() {
        const getPhotographersApi = new AllPhotographersApi('../../data/photographers.json').get()
        return getPhotographersApi
    }

    const allPhotographers = await photographersApi()

    return allPhotographers
    
}

async function displayData(photographers) {

    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
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
