
const emailInput = document.getElementById('emailInput');
console.log(emailInput);
    const message = document.getElementById("message");
    const message1 = document.getElementById("message1");

    emailInput.addEventListener("click", function() {
      message.style.display = "block";
      message.style.color="white";
      message.style.fontSize="15px";
      message.style.marginTop="10px";
      message.textContent = "YOU HAVE READ AND AGREE TO THE TERMS IN OUR PRIVACY POLICY ";
      message1.style.display = "block";
      message1.style.color="white";
      message1.style.fontSize="15px";
      message1.style.marginTop="10px";
      message1.textContent = "YOU CONSENT TO RECEIVING NOTHING MARKETING COMMUNICATIONS. ";
    });