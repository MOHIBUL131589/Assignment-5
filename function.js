
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
let liveTimeInterval;

function openModal(id) {
    let donationText = document.getElementById('donationBalance').innerText;
    let donationBag = parseFloat(donationText.replace(' BDT', ''));

    let opening = parseFloat(document.getElementById(id).value);
    let moneyBagText = document.getElementById('mainBalance').innerText;
    let moneyBag = parseFloat(moneyBagText.replace(' BDT', ''));

    if (opening > 0) {
        let newBalance = moneyBag - opening;
        document.getElementById('mainBalance').innerText = `${newBalance} BDT`;

        let newDonation = donationBag + opening;
        document.getElementById('donationBalance').innerText = `${newDonation} BDT`;

        
       
        document.getElementById('modalOpen').showModal();

        // transaction history 
        // donated money display in h1 
        const h1 = document.createElement('h1');
        h1.innerText = `${opening} Taka is Donated for famine-2024 at Feni, Bangladesh`
        h1.style.fontSize = '1.5rem'
        h1.style.fontFamily = 'font1'
        h1.style.fontWeight = 'bold'
        console.log(h1);

        document.getElementById('transaction-container').appendChild(h1);
        
        // time of the place showing 
        if(liveTimeInterval) {
            clearInterval(liveTimeInterval);
        }

        function liveTime(){
            const now = new Date();
            const time = now.toLocaleTimeString();
            document.getElementById('liveTime').innerText = time;
        }

        liveTime();
        liveTimeInterval = setInterval(liveTime, 1000);

        document.getElementById(id).value = '';

    }
    else {
        alert("Invalid input, Check the Amount you entered.");
    }
}

// card-2 money display to moneybag 
let liveTimeInterval1;
function openModalTwo(id2) {
    let donationTextTwo = document.getElementById('donationBalanceTwo').innerText;
    let donationBagTwo = parseFloat(donationTextTwo.replace(' BDT', ''));

    let openingTwo = parseFloat(document.getElementById(id2).value);
    let moneyBagTextTwo = document.getElementById('mainBalance').innerText;
    let moneyBagTwo = parseFloat(moneyBagTextTwo.replace(' BDT', ''));

    if (openingTwo > 0) {
        let newBalanceTwo = moneyBagTwo - openingTwo;
        document.getElementById('mainBalance').innerText = `${newBalanceTwo} BDT`;

        let newDonationTwo = donationBagTwo + openingTwo;
        document.getElementById('donationBalanceTwo').innerText = `${newDonationTwo} BDT`;

        document.getElementById('modalOpen').showModal();

        const h1 = document.createElement('h1');
        h1.innerText = `${openingTwo} Taka is Donated for Flood Relief in Feni,Bangladesh`
        h1.style.fontSize = '1.5rem'
        h1.style.fontFamily = 'font1'
        h1.style.fontWeight = 'bold'
        console.log(h1);

        document.getElementById('transaction-container-one').appendChild(h1);
        
        // time of the place showing

        if(liveTimeInterval) {
            clearInterval(liveTimeInterval);
        }

        function liveTimeOne(){
            const now = new Date();
            const time1 = now.toLocaleTimeString();
            document.getElementById('liveTime1').innerText = time1;
        }

        liveTimeOne();

        liveTimeInterval = setInterval(liveTimeOne, 1000);

        document.getElementById(id).value = ''
    }
    else {
        alert("Invalid input, Check the Amount you entered.");
    }
}

let liveTimeInterval2;
function openModalThree(id3) {
    let donationTextThree = document.getElementById('donationBalanceThree').innerText;
    let donationBagThree = parseFloat(donationTextThree.replace(' BDT', ''));

    let openingThree = parseFloat(document.getElementById(id3).value);
    let moneyBagTextThree = document.getElementById('mainBalance').innerText;
    let moneyBagThree = parseFloat(moneyBagTextThree.replace(' BDT', ''));

    if (openingThree > 0) {
        let newBalanceThree = moneyBagThree - openingThree;
        document.getElementById('mainBalance').innerText = `${newBalanceThree} BDT`;

        let newDonationThree = donationBagThree + openingThree;
        document.getElementById('donationBalanceThree').innerText = `${newDonationThree} BDT`;

        document.getElementById('modalOpen').showModal();

        const h1 = document.createElement('h1');
        h1.innerText = `${openingThree} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh`
        h1.style.fontSize = '1.5rem'
        h1.style.fontFamily = 'font1'
        h1.style.fontWeight = 'bold'
        console.log(h1);

        document.getElementById('transaction-container-two').appendChild(h1);
        
        // time of the place showing 
        if(liveTimeInterval) {
            clearInterval(liveTimeInterval);
        }

        function liveTimeTwo(){
            const now = new Date();
            const time = now.toLocaleTimeString();
            document.getElementById('liveTime2').innerText = time;
        }

        liveTimeTwo();
        liveTimeInterval2 = setInterval(liveTimeTwo, 1000);

        document.getElementById(id).value = ''
    }
    else {
        alert("Invalid input, Check the Amount you entered.");
    }
}





