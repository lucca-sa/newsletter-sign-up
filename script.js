const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const campos = document.querySelectorAll('.required')
const spans = document.querySelectorAll('.span-req')
const submitButton = document.querySelector('#submit-button')
const subscribeSec = document.querySelector('.subscribe-sec')
const thankYouSec = document.querySelector('.thank-you-div')
const imgHome = document.querySelector('.img-desktop')
const mainBloc = document.querySelector('main')
const spanEmail = document.querySelector('#user-email')
const imgMobile = document.querySelector('.img-mobile')
let validated = false
submitButton.disabled = true


function setError(index) {
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'inline';
    validated = false
}

function removeError(index) {
    campos[index].style.border = '';
    spans[index].style.display = 'none';
    validated = true
}


function emailValidation() {
    if (emailRegex.test(campos[0].value)) {
        removeError(0)
        submitButton.disabled = false
    } else {
        setError(0)
        submitButton.disabled = true
    }
}

function submitEmail() {
    subscribeSec.style.display = 'none'
    imgHome.style.display = 'none'
    thankYouSec.style.display = 'block'
    mainBloc.style.width = '25rem'
    spanEmail.innerHTML = campos[0].value

}
submitButton.addEventListener('click', () => {
    imgMobile.style.display = 'none'
})
submitButton.addEventListener('click', submitEmail)







