function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function primeCheck() {
    let input = document.getElementById("number").value;
    let num = parseInt(input , 10);
    let resultElement = document.getElementById("result");
    if (!num) {
        resultElement.textContent = "Error: Not a number";
        resultElement.style.color = "red";
    } else if (isPrime(num)) {
        resultElement.textContent = "Prime Number";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "Not a Prime Number";
        resultElement.style.color = "blue";
    }
}