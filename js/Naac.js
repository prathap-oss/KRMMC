 var slideIndex = 1;
        showDivs(slideIndex);

        function plusDivs(n) {
            showDivs(slideIndex += n);
        }

        function showDivs(n) {
            var i;
            var x = document.getElementsByClassName("mySlides");
            if (n > x.length) {
                slideIndex = 1
            }

            if (n < 1) {
                slideIndex = x.length
            };

            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            x[slideIndex - 1].style.display = "block";
        }




        function displayContent(event, contentNameID) {

            let content = document.getElementsByClassName("contentClass");
            let totalCount = content.length;

            // Loop through the content class
            // and hide the tabs first
            for (let count = 0; count < totalCount; count++) {
                content[count].style.display = "none";
            }

            let links =
                document.getElementsByClassName("linkClass");
            totalLinks = links.length;

            // Loop through the links and
            // remove the active class
            for (let count = 0; count < totalLinks; count++) {
                links[count].classList.remove("active");
            }

            // Display the current tab
            document.getElementById(contentNameID).style.display = "block";

            // Add the active class to the current tab
            event.currentTarget.classList.add("active");
        }