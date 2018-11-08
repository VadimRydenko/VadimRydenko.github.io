import './index.scss';

// function addElement (parentNode) {

//     function render () {
//         const contactImg = document.createElement('div');
//         const contactName = document.createElement('div');
//         const contactStatus = document.createElement('div');
//         const LastMessage = document.createElement('div');
    
//         contactImg.classList.add('contacts__item_img');
//         contactName.classList.add('contacts__item_name');
//         contactStatus.classList.add('contacts__item_status');
//         LastMessage.classList.add('contacts__item_last-mesage');
    
//         parentNode.appendChild(contactImg);
//         parentNode.appendChild(contactName);
//         parentNode.appendChild(contactStatus);
//         parentNode.appendChild(LastMessage);
//     }

//     render ();

// }

// addElement(document.querySelector('.unit1'));
// const unit1 = document.querySelector('.unit1')
// unit1.classList.add('foto_1');

// addElement(document.querySelector('.unit2'));
// addElement(document.querySelector('.unit3'));
// addElement(document.querySelector('.unit4'));
// addElement(document.querySelector('.unit5'));
// addElement(document.querySelector('.unit6'));

function addActive () {
    const buttonActive = document.querySelectorAll('.menu__items_btn');

    for (let i = 0; i<buttonActive.length; i++){
        buttonActive[i].onclick = toogle;
    }
    function toogle () {
        switch0ff();
        this.classList.add('menu__items_btn_active');
    }
    function switch0ff () {
        for (let i = 0; i<buttonActive.length; i++){
            buttonActive[i].classList.remove('menu__items_btn_active');
        }
    }
}
addActive ()