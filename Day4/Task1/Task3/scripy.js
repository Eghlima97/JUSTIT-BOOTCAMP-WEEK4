let correctpin = "1234"
let withdrawa = 120
function Atmtransaction(pin, withdrawa) {
  if (pin === correctpin && withdrawa <= accountBalance) {
    console.log("Transaction Approved." + withdrawa)
  }
  else {
    console.log("Transaction denied. Please check your PIN or balance.");
  }
}
Atmtransaction(1234, 100);
