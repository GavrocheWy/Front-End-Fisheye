function sortForm() {

    const productionsSection = document.querySelector('.productions-section')

    const sortForm = document.createElement('form')
    const sortLabel = document.createElement('label')
    const sortSelect = document.createElement('select')

    // Toutes les options :

    function buildOption(value, text) {

        const option = document.createElement('option')
        option.setAttribute('value', value)
        option.textContent = text
        sortSelect.appendChild(option)

    }

    // Construction du formulaire :

    sortLabel.textContent = 'Trier par...'

    sortForm.appendChild(sortLabel)
    sortForm.appendChild(sortSelect)
    
    buildOption('popularite', 'Popularité')
    buildOption('date', 'Date')
    buildOption('titre', 'Titre')

    sortForm.classList.add('sort-form')
    sortSelect.classList.add('sort-select')

    productionsSection.prepend(sortForm)

}