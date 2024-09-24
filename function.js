
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

// display money to the money bag 



