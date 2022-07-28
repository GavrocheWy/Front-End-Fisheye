// Paramètres d'URL (Pour chercher l'id du photographe)

let urlParams = (new URL(document.location)).searchParams;
let photographerId = parseInt(urlParams.get('id'));

// API pour rechercher tous les photographes

class AllPhotographersApi {

    constructor(url) {
        this._url = url
    }

    async get() {
        return fetch(this._url)
            .then(res => res.json())
            .then(res => res.photographers)
            .catch(err => console.log('an error occurs', err))
    }

}

// API pour rechercher un photographe à partir d'un paramètre URL

class SinglePhotographerApi {

    constructor(url) {
        this._url = url
    }

    async get() {
        return fetch(this._url)
            .then(res => res.json())
            .then(res => res.photographers)
            .then(async function (photographers) {

                return photographers.find(photographers => photographers.id === photographerId)

            })
            .catch(err => console.log('an error occurs', err))
    }

}

// API pour rechercher les médias relatifs à un photographe

class MediasApi {

    constructor(url) {
        this._url = url
    }

    async get() {
        return fetch(this._url)
            .then(res => res.json())
            .then(res => res.media)
            .then(async function (media) {

                return media.filter(media => media.photographerId === photographerId)

            })
            .catch(err => console.log('an error occurs', err))
    }

}