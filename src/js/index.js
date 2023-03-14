const bts = document.querySelectorAll('.bt');
const imgs = document.querySelectorAll('img');

bts.forEach((bt, ind) => {
    bt.addEventListener('click', () => {

        destBtSelect();

        selectBts(bt);

        escImgAt();

        mostImgFund(ind);
    })
})

function mostImgFund(ind) {
    imgs[ind].classList.add('at');
}

function selectBts(bt) {
    bt.classList.add('select');
}

function escImgAt() {
    const imgAt = document.querySelector('.at');
    imgAt.classList.remove('at');
}

function destBtSelect() {
    const btSelect = document.querySelector('.select');
    btSelect.classList.remove('select');
}