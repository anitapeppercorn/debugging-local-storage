// clear all search history
clearButton.addEventListener("click", function() {
    localStorage.clear();
  });
      
  
  function populateSearch() {
    console.log("func called")
    var dishInput = document.querySelector("#user-food-input").value;
    dishInput= localStorage.getItem("1")
  
  }
  
  function toastSuggestion() {
    console.log("add toast time")
    if (prevSearch > 2) {
      var firstSearch = localStorage[1]
  
      M.toast({
        html: `Craving ${firstSearch} again? <button onclick= "populateSearch()" class="btn-flat toast-action">Click Here</button>`,
        classes: 'rounded '
      })
      //<button onclick= "populateSearch(${firstSearch})"
      var toastAction = document.querySelector(".toast-action")
      console.log(toastAction)
      console.log(prevSearch)
  
    }
  }
  
  toastSuggestion()