function buildLightbox(id) {

    const lightboxContent = document.querySelector('#lightbox_modal_content')

    let firstDisplayedProduction = photographerProductions.find(production => production.id === id)

    let index = photographerProductions.indexOf(firstDisplayedProduction)

    lightboxContent.innerHTML = ''

    const currentProductionDisplayedSlider = document.createElement('div')
    const currentProductionDisplayedParent = document.createElement('div')
    const img = document.createElement('img')
    const video = document.createElement('video')
    const currentProductionDisplayedImg = document.createElement('div')
    const currentProductionDisplayedTitle = document.createElement('p')
    const previousArrow = document.createElement('button')
    const nextArrow = document.createElement('button')

    previousArrow.innerHTML= "<i class='fas fa-angle-left'></i>"
    nextArrow.innerHTML= "<i class='fas fa-angle-right'></i>"

    previousArrow.setAttribute('data-lightbox-nav', `prev`)
    nextArrow.setAttribute('data-lightbox-nav', `next`)
    
    currentProductionDisplayedTitle.textContent = firstDisplayedProduction.title

    lightboxContent.appendChild(currentProductionDisplayedSlider)

    currentProductionDisplayedSlider.appendChild(previousArrow)
    currentProductionDisplayedSlider.appendChild(currentProductionDisplayedParent)
    currentProductionDisplayedSlider.appendChild(nextArrow)
    
    currentProductionDisplayedParent.appendChild(currentProductionDisplayedImg)
    currentProductionDisplayedParent.appendChild(currentProductionDisplayedTitle)

    if (firstDisplayedProduction.image) {
        img.setAttribute('src', `assets/images/${firstDisplayedProduction.photographerId}/${firstDisplayedProduction.image}`)
        currentProductionDisplayedImg.appendChild(img)
    } else if (firstDisplayedProduction.video) {
        video.setAttribute('src', `assets/images/${firstDisplayedProduction.photographerId}/${firstDisplayedProduction.video}`)
        currentProductionDisplayedImg.appendChild(video)
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

    // Prev Button

    prevBtn.addEventListener('click', function() {

        index--
        
        if (index === -1) {
            index = (photographerProductions.length -1)
        }

        refreshProdutionDisplayed(index)

    })

    // Next Button

    nextBtn.addEventListener('click', function() {

        index++
        
        if (index >= photographerProductions.length) {
            index = 0
        }

        refreshProdutionDisplayed(index)

    })

    // Refresh Production 

    function refreshProdutionDisplayed(index) {

        if (photographerProductions[index].image != undefined) {
            img.setAttribute('src', `assets/images/${photographerProductions[index].photographerId}/${photographerProductions[index].image}`)
            document.querySelector('.modal-lightbox__current-production--img').innerHTML = ""
            currentProductionDisplayedImg.appendChild(img)
        } else if (photographerProductions[index].video != undefined) {
            video.setAttribute('src', `assets/images/${photographerProductions[index].photographerId}/${photographerProductions[index].video}`)
            document.querySelector('.modal-lightbox__current-production--img').innerHTML = ""
            currentProductionDisplayedImg.appendChild(video)
        }
        
        currentProductionDisplayedTitle.textContent = photographerProductions[index].title
    }

}

