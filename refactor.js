function returnRandomNumber() {
    let num  = Math.random();
    return Math.round(num * 100)
}
function sumToRandomNumber(num) {
  return `Seu número é ${returnRandomNumber() + num}!`;
}
function subtractRandomNumber(num) {
  return `Seu número é ${returnRandomNumber() - num}!`;
}
function multiplyToRandomNumber(num) {
  return `Seu número é ${returnRandomNumber() * num}!`;
}
function divideRandomNumber(num) {
  return `Seu número é ${returnRandomNumber() / num}!`;
}
