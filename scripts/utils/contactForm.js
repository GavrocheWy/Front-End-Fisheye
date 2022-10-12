/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

const contactForm = document.querySelector('#contact_modal_form')
const contactFormFirstnameElt = document.querySelector('#contact-form-prenom')
const contactFormLastnameElt = document.querySelector('#contact-form-nom')
const contactFormEmailElt = document.querySelector('#contact-form-email')
const contactFormMessageElt = document.querySelector('#contact-form-message')

let userInformations = {
    prenom: undefined,
    nom: undefined,
    email: undefined,
    message: undefined,
}

// Implémentation des informations

// Implémentation du prénom

contactFormFirstnameElt.addEventListener('change', function(e) {

    let val = e.target.value

    if (/^[A-Za-z]+$/.test(val)) {

        userInformations.prenom = val
        contactFormFirstnameElt.removeAttribute('aria-invalid')
        contactFormFirstnameElt.closest('.field-box').setAttribute('data-error-visible', 'false')

    } else {

        userInformations.prenom = undefined
        contactFormFirstnameElt.setAttribute('aria-invalid', 'spelling')
        contactFormFirstnameElt.closest('.field-box').setAttribute('data-error-visible', 'true')

    }

})

// Implémentation du nom

contactFormLastnameElt.addEventListener('change', function(e) {

    let val = e.target.value

    if (/^[A-Za-z]+$/.test(val)) {

        userInformations.nom = val
        contactFormLastnameElt.removeAttribute('aria-invalid')
        contactFormLastnameElt.closest('.field-box').setAttribute('data-error-visible', 'false')

    } else {

        userInformations.nom = undefined
        contactFormLastnameElt.setAttribute('aria-invalid', 'spelling')
        contactFormLastnameElt.closest('.field-box').setAttribute('data-error-visible', 'true')

    }

})

// Implémentation du mail

contactFormEmailElt.addEventListener('change', function(e) {

    let val = e.target.value

    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(val)) {

        userInformations.email = val
        contactFormEmailElt.removeAttribute('aria-invalid')
        contactFormEmailElt.closest('.field-box').setAttribute('data-error-visible', 'false')

    } else {

        userInformations.email = undefined
        contactFormEmailElt.setAttribute('aria-invalid', 'true')
        contactFormEmailElt.closest('.field-box').setAttribute('data-error-visible', 'true')

    }

})

// Implémentation du message

contactFormMessageElt.addEventListener('change', function(e) {

    let val = e.target.value

    if (val.length != 0) {

        userInformations.message = val
        contactFormMessageElt.removeAttribute('aria-invalid')
        contactFormMessageElt.closest('.field-box').setAttribute('data-error-visible', 'false')

    } else {

        userInformations.message = undefined
        contactFormMessageElt.setAttribute('aria-invalid', 'true')
        contactFormMessageElt.closest('.field-box').setAttribute('data-error-visible', 'true')

    }

})

// VERIFICATION / VALIDATION DU FORMULAIRE - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

contactForm.addEventListener('submit', function(e) {
    e.preventDefault()
    checkIfInfosAreCorrect() ? submitInfos() : submitError();
})

// Vérification des informations

function checkIfInfosAreCorrect() {

    if (Object.values(userInformations).every(value => value !== undefined)) {
        return true;
    } else {
        return false;
    }

}

// Envoi des informations

function submitInfos() {
    console.log('Prénom de l\'utilisateur :', userInformations.prenom)
    console.log('Nom de l\'utilisateur :', userInformations.nom)
    console.log('Adresse email de l\'utilisateur :', userInformations.email)
    console.log('Message de l\'utilisateur :', userInformations.message)
}

// Envoi des erreurs

function submitError() {
    
    let alert = document.createElement('div')
    alert.setAttribute('role', 'alert')
    alert.textContent = 'Certains éléments du formulaires sont invalides, veuillez les corriger s\'il vous plait'
    alert.textContent = 'Certains éléments du formulaires sont invalides, veuillez les corriger s\'il vous plait'
    contactForm.prepend(alert)
    
    if (userInformations.prenom === undefined) {
        contactFormFirstnameElt.setAttribute('aria-invalid', 'spelling')
        contactFormFirstnameElt.closest('.field-box').setAttribute('data-error-visible', 'true')
    } else if (userInformations.nom === undefined) {
        contactFormLastnameElt.setAttribute('aria-invalid', 'spelling')
        contactFormLastnameElt.closest('.field-box').setAttribute('data-error-visible', 'true')
    } else if (userInformations.email === undefined) {
        contactFormEmaileElt.setAttribute('aria-invalid', 'true')
        contactFormEmailElt.closest('.field-box').setAttribute('data-error-visible', 'true')
    } else if (userInformations.message === undefined) {
        contactFormEmaileElt.setAttribute('aria-invalid', 'true')
        contactFormEmailElt.closest('.field-box').setAttribute('data-error-visible', 'true')
    } else {
        checkIfInfosAreCorrect() ? submitInfos() : submitError();
    }


}