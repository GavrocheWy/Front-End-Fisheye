function likesProductions() {

    const allLikeButtons = document.querySelectorAll('.productions-section__article--btn')

    const totalLikesSelector = document.querySelector('#total-likes')
    let totalLikes = Number(totalLikesSelector.innerText)

    allLikeButtons.forEach(btn => {

        const associatedLikesSelector= btn.previousSibling
        let associatedLikes = Number(associatedLikesSelector.innerText)

        btn.addEventListener('click', function (e) {

            e.preventDefault()

            if (!btn.classList.contains('liked')) {

                btn.classList.add('liked')
                associatedLikes++
                totalLikes++

            } else if (btn.classList.contains('liked')) {

                btn.classList.remove('liked')
                associatedLikes--
                totalLikes--

            }

            associatedLikesSelector.innerText = associatedLikes
            totalLikesSelector.innerText = totalLikes

        })

    });

}