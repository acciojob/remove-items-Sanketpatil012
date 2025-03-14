
  function handleEvent(){
       const colorSelect = document.getElementById("colorSelect");

  // Get the selected option
  const selectedOption = colorSelect.options[colorSelect.selectedIndex];

  // Remove the selected option if one is chosen
  if (selectedOption) {
    colorSelect.remove(colorSelect.selectedIndex);

	  
  }

  }

