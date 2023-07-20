function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(
        " active",
        ""
      );
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();

  $(document).ready(function () {
    // Update the modal image source when a thumbnail is clicked
    $(".thumbnail").click(function () {
      var modalId = $(this).attr("data-target");
      var imgSrc = $(this).find("img").attr("src");
      $(modalId).find("img").attr("src", imgSrc);
    });

    // Show modal content when fully loaded
    $(".modal").on("shown.bs.modal", function () {
      $(this).find(".modal-content").addClass("active");
    });
  });