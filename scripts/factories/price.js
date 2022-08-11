function priceFactory(data) {

    const { price, totalLikes } = data;

    function getPriceCardDOM() {

        const priceCard = document.createElement('div')
        const priceText = document.createElement('p');
        const totalLikesText = document.createElement('p');

        // Attributs & Contenu textuel

        totalLikesText.setAttribute('id', 'total-likes')

        priceText.textContent = price + '€ / jour'
        totalLikesText.textContent = totalLikes

        // Construction de l'élément

        priceCard.appendChild(totalLikesText)
        priceCard.appendChild(priceText)

        // Ajout des classes CSS

        priceCard.classList.add('photograph-card')

        return (priceCard);

    }

    return { price, totalLikes, getPriceCardDOM }

}