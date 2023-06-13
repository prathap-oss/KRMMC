 $(document).ready(function() {
                $(".fancybox").fancybox({
                    openEffect: "none",
                    closeEffect: "none"
                });

                $(".zoom").hover(function() {

                    $(this).addClass('transition');
                }, function() {

                    $(this).removeClass('transition');
                });
            });


// slide show //
var slideIndexs = 1;
showDivs(slideIndexs);
function plusDivs(n) {
  showDivs(slideIndexs += n);
}

function showDivs(n) {
  var i;
  var x= document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndexs = 1}

  	if (n < 1) {slideIndexs = x.length} ;

  	for (i = 0; i < x.length; i++) {
   		 x[i].style.display = "none";
  	}
  	x[slideIndexs-1].style.display = "block";
}




    function displayContent(event, contentNameID) {

let content = document.getElementsByClassName("contentClass");
let totalCount = content.length;

// Loop through the content class
// and hide the tabs first
for (let count = 0;
  count < totalCount; count++) {
  content[count].style.display = "none";
}

let links =
  document.getElementsByClassName("linkClass");
totalLinks = links.length;

// Loop through the links and
// remove the active class
for (let count = 0;
  count < totalLinks; count++) {
  links[count].classList.remove("active");
}

// Display the current tab
document.getElementById(contentNameID).style.display = "block";

// Add the active class to the current tab
event.currentTarget.classList.add("active");
}




/* slideshow */
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlidess");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


let slideIndex1 = 0;
showSlidess();

function showSlidess() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex1++;
  if (slideIndex1 > slides.length) {slideIndex1 = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex1-1].style.display = "block";  
  dots[slideIndex1-1].className += " active";
  setTimeout(showSlidess, 2000); // Change image every 2 seconds
}







function slideSlider(){
    $("#slider-scroller").css({"left":"0%","transition":"all 0s linear"});
    $("#slider-scroller").css({"left": String(parseInt($("#slider-scroller").css("left")) - 500) + "px","transition":"all 5s linear"});
    setTimeout(function(){moveSliderItem()}, 2635);
  }
  
  function moveSliderItem(){
    $("#slider-scroller div").first().detach().appendTo($("#slider-scroller"));
    slideSlider();
  }
  
  slideSlider();




function slideSliders(){
  $("#slider-scrollers").css({"left":"0%","transition":"all 0s linear"});
  $("#slider-scrollers").css({"left": String(parseInt($("#slider-scrollers").css("left")) - 500) + "px","transition":"all 5s linear"});
  setTimeout(function(){moveSliderItems()}, 2635);
}

function moveSliderItems(){
  $("#slider-scrollers div").first().detach().appendTo($("#slider-scrollers"));
  slideSliders();
}

slideSliders();

