/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

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
        img.setAttribute("alt", `profil de ${name}`)
        contactBtn.setAttribute('onclick', 'displayModal()')
        contactBtn.setAttribute('aria-label', `Contacter ${name}`)

        h1.textContent = name;
        contactBtn.textContent = 'Contactez-moi';
        contactBtn.setAttribute('id', 'contact_modal_open_btn')
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
        imgFrame.classList.add('photograph-header__img-frame')
        h1.classList.add('photograph-header__title')

        paragraph.classList.add('photograph-header__infos')
        localisationSpan.classList.add('photograph-header__infos--localisation')
        taglineSpan.classList.add('photograph-header__infos--slogan')
        contactBtn.classList.add('contact_button')

        return (header);
    }

    return { name, id, city, country, tagline, price, picture, getUserCardDOM }

}