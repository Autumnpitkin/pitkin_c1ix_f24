let selectedOptions = {
    'Cup Size': 'None',
    'Flavor': 'None',
    'Milk': 'None'
  };
  
  function selectOption(category, value) {
    selectedOptions[category] = value;
    updateSelectionDisplay();
  }
  
  function updateSelectionDisplay() {
    const selectionText = `Cup Size: ${selectedOptions['Cup Size']}, 
                           Flavor: ${selectedOptions['Flavor']}, 
                           Milk: ${selectedOptions['Milk']}`;
    document.getElementById('coffee-selection').innerText = selectionText;
  }
  
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
  