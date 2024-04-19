let plus_btns = document.querySelectorAll(".plus")
let minus_btns = document.querySelectorAll(".minus")

plus_btns.forEach((btn) => btn.addEventListener('click', removeHidden))



function removeHidden(e) {
    target = e.target
    src = target.getAttribute('src')
    if (src == "assets/images/icon-minus.svg") {
        target.setAttribute('src', "assets/images/icon-plus.svg")
        target_paragraph = target.getAttribute('data-target')

        paragraph = document.getElementsByClassName(target_paragraph)[0]
        paragraph.classList.add("hidden")
    }
    else {
        target.setAttribute('src', "assets/images/icon-minus.svg")
        target_paragraph = target.getAttribute('data-target')
        paragraph = document.getElementsByClassName(target_paragraph)[0]
        paragraph.classList.remove("hidden")
    }


}

