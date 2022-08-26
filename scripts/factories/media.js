function mediaFactory(data) {

    const { photographerId, id, title, image, video, likes, date, isLiked } = data;

    let picture = `assets/images/${photographerId}/${image}`;
    let videoPlayer = `assets/images/${photographerId}/${video}`;

    function getProdCardDOM() {

        const article = document.createElement('article');
        const imgFrame = document.createElement('div')
        const details = document.createElement('div')
        const titleText = document.createElement('p')
        const likesBox = document.createElement('div')
        const likesText = document.createElement('p')
        const likesBtn = document.createElement('button')
        const likesIconEmpty = document.createElement('i')
        const likesIconFull = document.createElement('i')
        const lightBoxBtn = document.createElement('button')

        // Attributs & Contenu textuel

        titleText.textContent = title
        likesText.textContent = likes

        // Construction de l'élément

        article.appendChild(lightBoxBtn)

        article.appendChild(details)
        lightBoxBtn.appendChild(imgFrame)

        details.appendChild(titleText)
        details.appendChild(likesBox)

        likesBox.appendChild(likesText)
        likesBox.appendChild(likesBtn)

        likesBtn.appendChild(likesIconEmpty)
        likesBtn.appendChild(likesIconFull)

        // Ajout des classes CSS & des Attributs

        article.setAttribute('data-id', id)
        likesBtn.setAttribute('aria-label', `Ajouter un j'aime au média ${title}`)
        titleText.setAttribute('lang', 'en-GB')
        likesText.setAttribute('aria-label', `Nombre de j'aime pour ce post : ${likes}`)
        lightBoxBtn.setAttribute('aria-label', 
        `Ouvrir 
        ${image ? `l'image` : `la vidéo`}
        ${title}
        `)
        lightBoxBtn.setAttribute('lang', `en-GB`)

        article.classList.add('productions-section__article')
        imgFrame.classList.add('productions-section__article--img-frame')
        likesBtn.classList.add('productions-section__article--btn')
        details.classList.add('productions-section__article--details')
        titleText.classList.add('productions-section__article--title')
        likesBox.classList.add('productions-section__article-likebox')
        likesText.classList.add('productions-section__article-likebox--text')

        lightBoxBtn.classList.add('productions-section__article-lightbox-btn')

        likesIconEmpty.classList.add('far')
        likesIconEmpty.classList.add('fa-heart')
        likesIconFull.classList.add('fas')
        likesIconFull.classList.add('fa-heart')

        // Ajout de l'image ou de la vidéo 

        if (image) {

            const img = document.createElement('img');
            img.setAttribute("src", picture)
            img.setAttribute("alt", title)
            imgFrame.appendChild(img)

        } else if (video) {

            const video = document.createElement('video');
            const videoSrc = document.createElement('source');

            video.setAttribute('type', 'mp4')
            videoSrc.setAttribute("src", videoPlayer)

            imgFrame.appendChild(video)
            video.appendChild(videoSrc)

        }

        // Ajout des likes si l'image est déjà likées

        isLiked ? likesBtn.classList.add('liked') : likesBtn.classList.remove('liked');

        isLiked ? likesText.classList.add('liked') : likesText.classList.remove('liked');

        // Ajout des fontionnalités sur les éléments

        likesProductions(likesBtn)
        openLightbox(lightBoxBtn, id)

        // Return

        return (article);

    }

    return { photographerId, id, title, image, video, likes, date, isLiked, getProdCardDOM }

}