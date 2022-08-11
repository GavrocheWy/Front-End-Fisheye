function photographerFactory(data, context) {

    const { name, id, city, country, tagline, price, portrait } = data;
    
    let picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {

        // Création des éléments HTML de la page

        const article = document.createElement('article');
        const link = document.createElement('a');
        const img = document.createElement('img');
        const h2 = document.createElement('h2');
        const paragraph = document.createElement('p')

        const countrySpan = document.createElement('span')
        const taglineSpan = document.createElement('span')
        const priceSpan = document.createElement('span')

        img.setAttribute("src", picture)
        h2.textContent = name;
        countrySpan.textContent = `${city}, ${country}`
        taglineSpan.textContent = tagline
        priceSpan.textContent = `${price}€/jour`

        // Création de l'url avec l'id du photographe associé

        let urlSearchParams = `?id=${id}`
        let urlBase = 'photographer.html'
        let url = urlBase + urlSearchParams

        link.setAttribute('href', url)

        article.appendChild(link);

        link.appendChild(img);
        link.appendChild(h2);
        article.appendChild(paragraph);

        paragraph.appendChild(countrySpan);
        paragraph.appendChild(taglineSpan);
        paragraph.appendChild(priceSpan);

        return (article);
    }

    return { name, id, city, country, tagline, price, picture, getUserCardDOM }

}