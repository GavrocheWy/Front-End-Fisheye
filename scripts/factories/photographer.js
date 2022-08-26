function photographerFactory(data) {

    const { name, id, city, country, tagline, price, portrait } = data;
    
    let picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {

        // Création des éléments HTML de la page

        const article = document.createElement('article');
        const link = document.createElement('a');
        const imgFrame = document.createElement('div')
        const img = document.createElement('img');
        const h2 = document.createElement('h2');
        const paragraph = document.createElement('p')
        const localisationSpan = document.createElement('span')
        const taglineSpan = document.createElement('span')
        const priceSpan = document.createElement('span')

        img.setAttribute("src", picture)
        h2.textContent = name;
        localisationSpan.textContent = `${city}, ${country}`
        taglineSpan.textContent = tagline
        priceSpan.textContent = `${price}€/jour`

        // Création de l'url avec l'id du photographe associé

        let urlSearchParams = `?id=${id}`
        let urlBase = 'photographer.html'
        let url = urlBase + urlSearchParams

        link.setAttribute('href', url)
        link.setAttribute('aria-label', `Visiter la page de ${name}`)

        article.appendChild(link);

        // Construction de l'élément

        link.appendChild(imgFrame);
        link.appendChild(h2);
        imgFrame.appendChild(img);
        article.appendChild(paragraph);

        paragraph.appendChild(localisationSpan);
        paragraph.appendChild(taglineSpan);
        paragraph.appendChild(priceSpan);

        // Ajout des classes CSS

        imgFrame.classList.add('article__img-frame')
        link.classList.add('article__link')
        paragraph.classList.add('article__infos')
        localisationSpan.classList.add('article__infos--localisation')
        taglineSpan.classList.add('article__infos--slogan')
        priceSpan.classList.add('article__infos--price')
        h2.classList.add('article__title')

        // Return

        return (article);
    }

    return { name, id, city, country, tagline, price, picture, getUserCardDOM }

}