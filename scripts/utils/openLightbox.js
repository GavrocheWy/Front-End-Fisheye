const lighboxModal = document.querySelector("#lightbox_modal");

const lightboxCloseBtn = document.querySelector('#lightbox_modal_close_btn')
let previouslyFocusedElement = null

const blabla = 1

const focusableElementInLightboxModal = 'button, a, input, textarea';
let focusablesInLightbox = []

function openLightbox(btn, id) {

    btn.addEventListener('click', function (e) {

        e.preventDefault()

        const modalCloseBtn = document.querySelector("#lightbox_modal_close_btn");

        lighboxModal.style.display = "block";
        lighboxModal.setAttribute('aria-hidden', 'false')
        lighboxModal.setAttribute('aria-modal', 'true')
        body.classList.add('no-scroll')

        previouslyFocusedElement = document.querySelector(':focus')
        modalCloseBtn.focus()

        buildLightbox(id)

        focusablesInLightbox = Array.from(lighboxModal.querySelectorAll(focusableElementInLightboxModal))

    })

}

lightboxCloseBtn.addEventListener('click', closeLightbox)

function closeLightbox() {

    if (previouslyFocusedElement !== null) {
        previouslyFocusedElement.focus()
    }

    lighboxModal.style.display = "none";
    lighboxModal.setAttribute('aria-hidden', 'true')
    lighboxModal.setAttribute('aria-modal', 'false')
    body.classList.remove('no-scroll')

}

// Focus uniquement dans la modale lorsque la modale est ouverte


function onlyFocusInLightbox(e) {
    e.preventDefault();
    let index = focusablesInLightbox.findIndex(f => f === lighboxModal.querySelector(':focus'))

    if (e.shiftKey === true) {
        index--
    } else {
        index++
    }

    if (index < 0) {
        index = focusablesInLightbox.length - 1
    }

    if (index >= focusablesInLightbox.length) {
        index = 0
    }

    focusablesInLightbox[index].focus()
}

// Fermeture et ouverture de la modale grâce aux touches du clavier 

document.addEventListener('keydown', function(e) {

    if (lighboxModal.getAttribute('aria-hidden') == 'false' && (e.key === 'Escape' || e.key === 'Esc')) {
        closeLightbox()
    }

    if (lighboxModal.getAttribute('aria-hidden') == 'false' && e.key === 'Tab') {
        onlyFocusInLightbox(e)
    }

})