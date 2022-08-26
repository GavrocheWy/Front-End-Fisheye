function refreshProductionsGrid() {

    let arr = photographerProductions

    // Écoute du formulaire de tri

    const sortSelectSelector = document.querySelector('.sort-select')

    sortSelectSelector.addEventListener('change', function (e) {
        
        e.preventDefault
        
        const selectedValue = e.target.value

        switch (selectedValue) {

            case 'popularite': sortByPopularity()
                break;

            case 'date': sortByDate()
                break;

            case 'titre': sortByTitle()
                break;

        }

    })

    // Trier par date de création (date de la plus ancienne à la plus récente)

    function sortByDate() {

        const newArr = arr.sort((a, b) => {
            let da = new Date(a.date),
                db = new Date(b.date);
            return da - db;
        });

        const productionsSection = document.querySelector(".productions-section");
        const currentArticles = productionsSection.querySelectorAll('article')

        currentArticles.forEach(article => {
            article.remove()
        });

        newArr.forEach((production) => {

            const photographerProductionModel = mediaFactory(production);
            const prodCardDOM = photographerProductionModel.getProdCardDOM();
            productionsSection.appendChild(prodCardDOM);

        });

    }

    // Trier par popularité (nombre de likes par ordre décroissant)

    function sortByPopularity() {

        const newArr = arr.sort((a, b) => {
            return b.likes - a.likes;
        });

        const productionsSection = document.querySelector(".productions-section");
        const currentArticles = productionsSection.querySelectorAll('article')

        currentArticles.forEach(article => {
            article.remove()
        });

        newArr.forEach((production) => {

            const photographerProductionModel = mediaFactory(production);
            const prodCardDOM = photographerProductionModel.getProdCardDOM();
            productionsSection.appendChild(prodCardDOM);

        });

    }

    // Trier par titre (ordre alphabétique)

    function sortByTitle() {

        const newArr = arr.sort((a, b) => {
            if (a.title < b.title) {return -1;}
            if (a.title > b.title) {return 1;}
            return 0;
        });

        const productionsSection = document.querySelector(".productions-section");
        const currentArticles = productionsSection.querySelectorAll('article')

        currentArticles.forEach(article => {
            article.remove()
        });

        newArr.forEach((production) => {

            const photographerProductionModel = mediaFactory(production);
            const prodCardDOM = photographerProductionModel.getProdCardDOM();
            productionsSection.appendChild(prodCardDOM);

        });

    }

}