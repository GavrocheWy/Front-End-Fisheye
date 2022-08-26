function likesProductions(btn) {


    btn.addEventListener('click', function (e) {

        e.preventDefault()

        likeThePost(btn)

    })

}

function likeThePost(btn) {
    const totalLikesSelector = document.querySelector('#total-likes')
    let totalLikes = Number(totalLikesSelector.innerText)
    let associatedLikesSelector = btn.previousSibling
    let associatedLikes = Number(associatedLikesSelector.innerText)

    const associatedProduction = getProductionId()

    if (associatedProduction.isLiked === false) {

        btn.classList.add('liked')
        associatedLikesSelector.classList.add('liked')
        associatedProduction.isLiked = true
        associatedProduction.likes++
        associatedLikes++
        totalLikes++

        console.log(associatedProduction)

    } else if (associatedProduction.isLiked === true) {

        btn.classList.remove('liked')
        associatedLikesSelector.classList.remove('liked')
        associatedProduction.isLiked = false
        associatedProduction.likes--
        associatedLikes--
        totalLikes--

        console.log(associatedProduction)

    }

    associatedLikesSelector.innerText = associatedLikes
    totalLikesSelector.innerText = totalLikes

    function getProductionId() {

        let parent = btn.closest('.productions-section__article')
        let parentID = Number(parent.getAttribute('data-id'))
        console.log(photographerProductions)

        return searchProductionById(parentID)

        function searchProductionById(parentID) {
            let production = photographerProductions.find(production => production.id === parentID)
            return production
        }

    }
}