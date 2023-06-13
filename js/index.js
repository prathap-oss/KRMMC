  var index = 0;
                    var slides = document.querySelectorAll(".slides");
                    var dot = document.querySelectorAll(".dot");

                    function changeSlide() {

                        if (index < 0) {
                            index = slides.length - 1;
                        }

                        if (index > slides.length - 1) {
                            index = 0;
                        }

                        for (let i = 0; i < slides.length; i++) {
                            slides[i].style.display = "none";
                            dot[i].classList.remove("active");
                        }
                        slides[index].style.display = "block";
                        dot[index].classList.add("active");

                        index++;

                        setTimeout(changeSlide, 2000);

                    }
                    changeSlide();

                     var modal = document.getElementById('id01');
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
         window.onload = function() {
            document.getElementById("popup").style.display = "block";
        }

        function closePop() {
            document.getElementById("popup").style.display = "none";
            window.alert('submitted succesfully');
        }
        function closePopup() {
            document.getElementById("popup").style.display = "none";

        }



function enableSubmit(){
    let inputs = document.getElementsByClassName('required'); 
let btn = document.querySelector('button[type="submit"]');
let isValid = true;
for (var i = 0; i < inputs.length; i++){
let changedInput = inputs[i];
if (changedInput.value.trim() === "" || changedInput.value === null){
    isValid = false;break;}
}
btn.disabled = !isValid; 
    }




         $("form").submit(function(e) {
        e.preventDefault();
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbyU1wPAZQ--ckKuwJ_j_Z8kCW2dLrKkaJzsmQQzBbLOZ3jDdb5g4D6z2skFHoZ6kYMH/exec",
            data: $(this).serialize(),
            type: "POST",
            dataType: "xml",
            success: function(data) {
                console.log('Submission successful');
            },
            error: function(xhr, status, error) {
                console.log('Submission failed: ' + error);
            }
        });
    });
