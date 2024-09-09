// Function to toggle the width of the search box
function toggleState(element, isOpen) {
    if (isOpen) {
      element.style.width = '300px';
    } else {
      element.style.width = '50px';
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    var boxContainer = document.querySelector('.search-box-container');
    var submit = document.querySelector('.search-submit');
    var searchBox = document.querySelector('.search-box');
    var response = document.querySelector('.search-response');
    var isOpen = false;
  
    submit.addEventListener('mousedown', function(e) {
      e.preventDefault();
      toggleState(boxContainer, !isOpen);
      isOpen = !isOpen;
      if (!isOpen) {
        handleRequest();
      } else {
        searchBox.focus();
      }
    });
  
    searchBox.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        toggleState(boxContainer, false);
        isOpen = false;
        handleRequest();
      }
    });
  
    searchBox.addEventListener('blur', function() {
      toggleState(boxContainer, false);
      isOpen = false;
    });
  
    function handleRequest() {
      var value = searchBox.value;
      searchBox.value = '';
      if (value.length > 0) {
        response.textContent = `Searching for "${value}" . . .`;
        response.style.opacity = 1;
        setTimeout(function() {
          response.style.opacity = 0;
        }, 2300); // 300ms fade-in + 2000ms delay
      }
    }
  });
  