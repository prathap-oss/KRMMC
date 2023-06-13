 function ClosePop() {
    alert("submitted successfully");
        }
    $("form").submit(function(e) {
        e.preventDefault();
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbyxajA62Zbq_nVPowCEjxHeLyDPESRo0fmNYob_d3cJ6_9V7P3lw2kW2tDPVjU3Td4CYQ/exec",
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