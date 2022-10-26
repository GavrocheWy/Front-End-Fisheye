/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

function buildLightbox(id) {

    const lightboxContent = document.querySelector('#lightbox_modal_content')

    let firstDisplayedProduction = photographerProductions.find(production => production.id === id)

    let index = photographerProductions.indexOf(firstDisplayedProduction)

    lightboxContent.innerHTML = ''

    const currentProductionDisplayedSlider = document.createElement('div')
    const currentProductionDisplayedParent = document.createElement('div')
    const img = document.createElement('img')
    const videoPlayer = document.createElement('button')
    const video = document.createElement('video')
    const currentProductionDisplayedImg = document.createElement('div')
    const currentProductionDisplayedTitle = document.createElement('p')
    const previousArrow = document.createElement('button')
    const nextArrow = document.createElement('button')

    previousArrow.innerHTML = "<i class='fas fa-angle-left'></i>"
    nextArrow.innerHTML = "<i class='fas fa-angle-right'></i>"

    previousArrow.setAttribute('aria-label', `Aller au post précédent`)
    nextArrow.setAttribute('aria-label', `Aller au post suivant`)
    videoPlayer.setAttribute('aria-label', `Cliquez sur Entrée pour lancer ou mettre en pause la vidéo`)

    videoPlayer.setAttribute('id', `video-player`)
    previousArrow.setAttribute('data-lightbox-nav', `prev`)
    nextArrow.setAttribute('data-lightbox-nav', `next`)

    // currentProductionDisplayedTitle.setAttribute('aria-live', 'assertive')

    currentProductionDisplayedTitle.textContent = firstDisplayedProduction.title

    lightboxContent.appendChild(currentProductionDisplayedSlider)

    currentProductionDisplayedSlider.appendChild(previousArrow)
    currentProductionDisplayedSlider.appendChild(currentProductionDisplayedParent)
    currentProductionDisplayedSlider.appendChild(nextArrow)

    currentProductionDisplayedParent.appendChild(currentProductionDisplayedImg)
    currentProductionDisplayedParent.appendChild(currentProductionDisplayedTitle)

    if (firstDisplayedProduction.image) {
        img.setAttribute('src', `assets/images/${firstDisplayedProduction.photographerId}/${firstDisplayedProduction.image}`)
        img.setAttribute('alt', `${firstDisplayedProduction.title}`)
        currentProductionDisplayedImg.appendChild(img)
    } else if (firstDisplayedProduction.video) {
        video.setAttribute('src', `assets/images/${firstDisplayedProduction.photographerId}/${firstDisplayedProduction.video}`)
        video.setAttribute('alt', `${firstDisplayedProduction.title}`)
        currentProductionDisplayedImg.appendChild(videoPlayer)
        videoPlayer.appendChild(video)
    }

    video.setAttribute('controls', true)

    // Ajout des classes CSS

    currentProductionDisplayedSlider.classList.add('modal-lightbox__main')
    currentProductionDisplayedParent.classList.add('modal-lightbox__current-production')
    currentProductionDisplayedImg.classList.add('modal-lightbox__current-production--img')
    currentProductionDisplayedTitle.classList.add('modal-lightbox__current-production--title')

    previousArrow.classList.add('modal-lightbox__nav')
    nextArrow.classList.add('modal-lightbox__nav')

    let prevBtn = document.querySelector('[data-lightbox-nav="prev"]')

    let nextBtn = document.querySelector('[data-lightbox-nav="next"]')

    let videoPlayerBtn = document.querySelector('#video-player')

    // Prev Button

    const previousPost = () => {
        if (document.querySelector('.lightbox-alert')) {
            document.querySelector('.lightbox-alert').remove()
        }

        index--

        if (index === -1) {
            index = (photographerProductions.length - 1)
        }

        refreshProdutionDisplayed(index)

        let alert = document.createElement('div')
        alert.setAttribute('role', 'alert')
        alert.classList.add('lightbox-alert')
        alert.textContent = `Vous êtes sur l'image ${photographerProductions[index].title}`
        lightboxContent.prepend(alert)
    }

    prevBtn.addEventListener('click', previousPost)

    // Next Button

    const nextPost = () => {
        if (document.querySelector('.lightbox-alert')) {
            document.querySelector('.lightbox-alert').remove()
        }

        index++

        if (index >= photographerProductions.length) {
            index = 0
        }

        refreshProdutionDisplayed(index)

        let alert = document.createElement('div')
        alert.setAttribute('role', 'alert')
        alert.classList.add('lightbox-alert')
        alert.textContent = `Vous êtes sur l'image ${photographerProductions[index].title}`
        lightboxContent.prepend(alert)
    }

    nextBtn.addEventListener('click', nextPost)

    // Navigation touches du clavier

    document.addEventListener('keydown', function (e) {

        if (lighboxModal.getAttribute('aria-hidden') == 'false' && (e.key === 'ArrowLeft')) {
            previousPost()
            prevBtn.focus()
        }

        if (lighboxModal.getAttribute('aria-hidden') == 'false' && e.key === 'ArrowRight') {
            nextPost()
            nextBtn.focus()
        }

    })

    // Lancement de la vidéo au clic

    if (photographerProductions[index].video) {
        videoPlayerBtn.addEventListener('click', function () {

            const thisVideo = videoPlayerBtn.querySelector('video')

            // Play, pause video

            thisVideo.paused ? thisVideo.play() : thisVideo.pause();

        })
    }

    // Refresh Production 

    function refreshProdutionDisplayed(index) {

        if (photographerProductions[index].image != undefined) {
            img.setAttribute('src', `assets/images/${photographerProductions[index].photographerId}/${photographerProductions[index].image}`)
            img.setAttribute('alt', `${photographerProductions[index].title}`)
            document.querySelector('.modal-lightbox__current-production--img').innerHTML = ""
            currentProductionDisplayedImg.appendChild(img)
            focusablesInLightbox = Array.from(lighboxModal.querySelectorAll(focusableElementInLightboxModal))
        } else if (photographerProductions[index].video != undefined) {
            video.setAttribute('src', `assets/images/${photographerProductions[index].photographerId}/${photographerProductions[index].video}`)
            video.setAttribute('alt', `${photographerProductions[index].title}`)
            document.querySelector('.modal-lightbox__current-production--img').innerHTML = ""
            currentProductionDisplayedImg.appendChild(videoPlayer)
            videoPlayer.appendChild(video)
            focusablesInLightbox = Array.from(lighboxModal.querySelectorAll(focusableElementInLightboxModal))
        }

        currentProductionDisplayedTitle.textContent = photographerProductions[index].title
    }

}

