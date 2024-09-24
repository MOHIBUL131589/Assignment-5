
// donate and history changing

function hideSectionById(id) {
    document.getElementById('all-section').classList.add('hidden');
    document.getElementById('history').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}


// button backgroundColor changing 
function buttonColor(btn, color, resetbtn) {
    btn.style.backgroundColor = color;
    resetbtn.style.backgroundColor = '';
}


// popup modal  

// card-1 money display to moneybag

function openModal(id) {
    let donationText = document.getElementById('donationBalance').innerText;
    let donationBag = parseFloat(donationText.replace(' BDT', ''));

    let opening = parseFloat(document.getElementById(id).value);
    let moneyBagText = document.getElementById('mainBalance').innerText;
    let moneyBag = parseFloat(moneyBagText.replace(' BDT', ''));

    if(opening > 0){
        let newBalance = moneyBag - opening;
        document.getElementById('mainBalance').innerText = `${newBalance} BDT`;

        let newDonation = donationBag + opening;
        document.getElementById('donationBalance').innerText = `${newDonation} BDT`;

        document.getElementById('modalOpen').showModal();
    }
    else{
        alert("Invalid input, Check the Amount you entered.");
    }
}

// card-2 money display to moneybag 

function openModalTwo(id2) {
    let donationTextTwo = document.getElementById('donationBalanceTwo').innerText;
    let donationBagTwo = parseFloat(donationTextTwo.replace(' BDT', ''));

    let openingTwo = parseFloat(document.getElementById(id2).value);
    let moneyBagTextTwo = document.getElementById('mainBalance').innerText;
    let moneyBagTwo = parseFloat(moneyBagTextTwo.replace(' BDT', ''));

    if(openingTwo > 0){
        let newBalanceTwo = moneyBagTwo - openingTwo;
        document.getElementById('mainBalance').innerText = `${newBalanceTwo} BDT`;

        let newDonationTwo = donationBagTwo + openingTwo;
        document.getElementById('donationBalanceTwo').innerText = `${newDonationTwo} BDT`;

        document.getElementById('modalOpen').showModal();
    }
    else{
        alert("Invalid input, Check the Amount you entered.");
    }
}


function openModalThree(id3) {
    let donationTextThree = document.getElementById('donationBalanceThree').innerText;
    let donationBagThree = parseFloat(donationTextThree.replace(' BDT', ''));

    let openingThree = parseFloat(document.getElementById(id3).value);
    let moneyBagTextThree = document.getElementById('mainBalance').innerText;
    let moneyBagThree = parseFloat(moneyBagTextThree.replace(' BDT', ''));

    if(openingThree > 0){
        let newBalanceThree = moneyBagThree - openingThree;
        document.getElementById('mainBalance').innerText = `${newBalanceThree} BDT`;

        let newDonationThree = donationBagThree + openingThree;
        document.getElementById('donationBalanceThree').innerText = `${newDonationThree} BDT`;

        document.getElementById('modalOpen').showModal();
    }
    else{
        alert("Invalid input, Check the Amount you entered.");
    }
}





