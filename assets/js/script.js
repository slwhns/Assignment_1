(function () {
    "use strict";
    
    /* Contact Form */
    document.getElementById("form").addEventListener("submit", function(event) {
        event.preventDefault();
      
        document.getElementById("success-message").style.display = "block";
      
        document.getElementById("form").reset();
      
        setTimeout(function() {
            document.getElementById("success-message").style.display = "none";
        }, 5000);
    });
})();