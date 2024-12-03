const coffeeName = document.querySelector(".coffee_name");
const filling = document.querySelector(".filling");
const buttons = document.querySelectorAll(".options button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    filling.className = `filling ${button.id}`;
    coffeeName.textContent = button.textContent;
  });
});

  
  let mybutton = document.getElementById("myBtn");
  
  window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  };
  
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  