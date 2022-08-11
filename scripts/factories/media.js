function mediaFactory(data) {

    const { photographerId, id, title, image, video, likes, date } = data;

    let picture = `assets/images/${photographerId}/${image}`;
    let videoPlayer = `assets/images/${photographerId}/${video}`;

    function getProdCardDOM() {

        const article = document.createElement('article');
        const imgFrame = document.createElement('div')
        const details = document.createElement('div')
        const titleText = document.createElement('p')
        const likesText = document.createElement('p')
        const likesBtn = document.createElement('button')

        // Attributs & Contenu textuel

        titleText.textContent = title
        likesText.textContent = likes
        likesBtn.textContent = 'J\'aime !'

        // Construction de l'élément

        article.appendChild(imgFrame)
        article.appendChild(details)
        details.appendChild(titleText)
        details.appendChild(likesText)
        details.appendChild(likesBtn)

        // Ajout des classes CSS

        article.classList.add('productions-section__article')
        imgFrame.classList.add('productions-section__article--img-frame')
        likesBtn.classList.add('productions-section__article--btn')

        // Ajout de l'image ou de la vidéo 

        if (image) {

            const img = document.createElement('img');
            img.setAttribute("src", picture)
            imgFrame.appendChild(img)

        } else if (video) {

            const video = document.createElement('video');
            const videoSrc = document.createElement('source');

            video.setAttribute('controls', 'true')
            video.setAttribute('type', 'mp4')
            videoSrc.setAttribute("src", videoPlayer)

            imgFrame.appendChild(video)
            video.appendChild(videoSrc)

        }

        // Return

        return (article);

    }

    return { photographerId, id, title, image, video, likes, date, getProdCardDOM }

}