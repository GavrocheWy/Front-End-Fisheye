function priceFactory(data) {

    const { price, totalLikes } = data;

    function getPriceCardDOM() {

        const priceCard = document.createElement('div')
        const priceText = document.createElement('p');
        const totalLikesBox = document.createElement('div');
        const totalLikesText = document.createElement('p');
        const totalLikesIcon = document.createElement('i');

        // Attributs & Contenu textuel

        totalLikesText.setAttribute('id', 'total-likes')

        priceText.textContent = price + '€ / jour'
        totalLikesText.textContent = totalLikes

        // Construction de l'élément

        priceCard.appendChild(totalLikesBox)
        priceCard.appendChild(priceText)

        totalLikesBox.appendChild(totalLikesText)
        totalLikesBox.appendChild(totalLikesIcon)

        // Ajout des classes CSS

        priceCard.classList.add('photograph-card')
        totalLikesBox.classList.add('photograph-card__total-like')
        totalLikesIcon.classList.add('fas')
        totalLikesIcon.classList.add('fa-heart')

        return (priceCard);

    }

    return { price, totalLikes, getPriceCardDOM }

}