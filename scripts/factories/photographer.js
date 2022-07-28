function photographerFactory(data) {
    
    const { name, id, city, country, tagline, price, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        const h2 = document.createElement( 'h2' );
        const paragraph = document.createElement('p')

        const countrySpan = document.createElement('span')
        const taglineSpan = document.createElement('span')
        const priceSpan = document.createElement('span')
        
        img.setAttribute("src", picture)
        h2.textContent = name;
        countrySpan.textContent = country
        taglineSpan.textContent = tagline
        priceSpan.textContent = `${price}€/jour`

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(paragraph);

        paragraph.appendChild(countrySpan);
        paragraph.appendChild(taglineSpan);
        paragraph.appendChild(priceSpan);

        return (article);
    }

    return { name, id, city, country, tagline, price, picture, getUserCardDOM }
}