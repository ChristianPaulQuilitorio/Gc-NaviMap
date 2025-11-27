  // JavaScript to toggle image visibility for each link
    var links = document.querySelectorAll('.showImageLink');
    var images = document.querySelectorAll('.image');
    var currentIndex = 0;
    

    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function(e) {
        e.preventDefault(); // prevent default link behavior
        var index = parseInt(this.getAttribute('data-index'));
        showImage(index);
      });
    }

    function showImage(index) {
      // Hide all images
      for (var j = 0; j < images.length; j++) {
        images[j].style.display = 'none';
      }
      // Show the selected image
      images[index].style.display = 'block';
      currentIndex = index;
    }
    
   

//dropdown
function toggleDropdown() {
  var dropdown = document.getElementById("myDropdown");
  dropdown.classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
          }
      }
  }
}
