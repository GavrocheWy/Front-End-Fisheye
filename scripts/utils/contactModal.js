/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

const body = document.querySelector('body')
const modal = document.querySelector("#contact_modal");

const focusableElementInContactModal = 'button, a, input, textarea';
let focusablesInContact = []


function displayModal() {

    const modalCloseBtn = document.querySelector("#contact_modal_close_btn");

    modal.style.display = "block";
    modal.setAttribute('aria-hidden', 'false')
    modal.setAttribute('aria-modal', 'true')
    body.classList.add('no-scroll')
    modalCloseBtn.focus()

    focusablesInContact = Array.from(modal.querySelectorAll(focusableElementInContactModal))
}

function closeModal() {

    const modalOpenBtn = document.querySelector("#contact_modal_open_btn");
    
    modal.style.display = "none";
    modal.setAttribute('aria-hidden', 'true')
    modal.setAttribute('aria-modal', 'false')
    body.classList.remove('no-scroll')
    modalOpenBtn.focus()

}

// Focus uniquement dans la modale lorsque la modale est ouverte

function onlyFocusInModal(e) {
    e.preventDefault();
    let index = focusablesInContact.findIndex(f => f === modal.querySelector(':focus'))

    if (e.shiftKey === true) {
        index--
    } else {
        index++
    }

    if (index < 0) {
        index = focusablesInContact.length - 1
    }

    if (index >= focusablesInContact.length) {
        index = 0
    }

    focusablesInContact[index].focus()
}

// Fermeture et ouverture de la modale grâce aux touches du clavier 

document.addEventListener('keydown', function(e) {

    if (modal.getAttribute('aria-hidden') == 'false' && (e.key === 'Escape' || e.key === 'Esc')) {
        closeModal()
    }

    if (modal.getAttribute('aria-hidden') == 'false' && e.key === 'Tab') {
        onlyFocusInModal(e)
    }

})