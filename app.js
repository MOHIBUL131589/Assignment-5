


// donate and history changing 
document.getElementById('btn-donate').addEventListener('click', function () {
    hideSectionById('all-section');


})

document.getElementById('btn-history').addEventListener('click', function () {
    hideSectionById('history');
})

// button color changing when clicked 

const btn1 = document.getElementById('btn-donate');
const btn2 = document.getElementById('btn-history');

btn1.addEventListener('click', function () {
    buttonColor(btn1, '#B4F461', btn2);
})

btn2.addEventListener('click', function () {
    buttonColor(btn2, '#B4F461', btn1);
})


// popup modal 

const closeModal = document.getElementById('modalClose');

modalClose.addEventListener('click', function () {
    modalOpen.remove();
})


// diplay money to the money bag 


document.getElementById('donateNow').addEventListener('click', function(){
    openModal('donate-1', 'mainBalance')
})







