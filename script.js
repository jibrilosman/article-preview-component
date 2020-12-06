const btn = document.querySelector('#btn');
const share = document.querySelector('#share');

function clickBtn() {
    if(share.classList.contains('close')){
        share.classList.add('open');
        share.classList.remove('close');
    }
    else{
        share.classList.remove('open');
        share.classList.add('close')
    }
}

btn.addEventListener('click', clickBtn())