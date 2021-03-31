let day = 1
let hours = 0
let minutes = 0
let seconds = 0
let wallet = "0x82f8243f0160E595d66035Ab6Ff6539e67E41E6e";




// dont edit
let titleWallet = document.getElementById("wallet").innerText = wallet.toLocaleString('ru');
let time = (day * (24 * 60 * 60)) + (hours * (60 * 60)) + (minutes * 60);
let timeContainer = document.getElementById('overTime').innerText = time;
// dont edit
