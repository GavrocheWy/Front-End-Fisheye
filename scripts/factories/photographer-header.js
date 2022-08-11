function photographerHeader(data) {

    const { name, id, city, country, tagline, price, portrait } = data;
    
    let picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {

        // Création des éléments HTML de la page

        const header = document.createElement('header');

        const infos = document.createElement('div')
        const h1 = document.createElement('h1');
        const paragraph = document.createElement('p')
        const contactBtn = document.createElement('button')
        const imgFrame = document.createElement('div')
        const img = document.createElement('img');
        const localisationSpan = document.createElement('span')
        const taglineSpan = document.createElement('span')

        // Attributs & Contenu textuel

        img.setAttribute("src", picture)
        contactBtn.setAttribute('onclick', 'displayModal()')

        h1.textContent = name;
        contactBtn.textContent = 'Contactez-moi';
        localisationSpan.textContent = `${city}, ${country}`
        taglineSpan.textContent = tagline

        // Construction de l'élément

        header.appendChild(infos);
        header.appendChild(contactBtn);
        header.appendChild(imgFrame);
        infos.appendChild(h1)
        infos.appendChild(paragraph)
        imgFrame.appendChild(img);

        paragraph.appendChild(localisationSpan);
        paragraph.appendChild(taglineSpan);

        // Ajout des classes CSS

        header.classList.add('photograph-header')

        return (header);
    }

    return { name, id, city, country, tagline, price, picture, getUserCardDOM }

}