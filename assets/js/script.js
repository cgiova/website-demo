$( document ).ready(function() {
                
                $("#about_scroll").fadeOut();   
                $("#work_scroll").fadeOut();

                $("#about").click(function(){
                    $("#index").fadeOut();
                    $("#about_scroll").fadeIn();
                    $('#about_left').addClass('animated slideInLeft');
                    $('#about_right').addClass('animated slideInRight');
                    });
                $("#work").click(function(){
                    $("#index").fadeOut();
                    $("#work_scroll").fadeIn();
                    $('#work_left').addClass('animated slideInLeft');
                    $('#work_right').addClass('animated slideInRight');
                    });
                
                $(".back").click(function(){
                    $(".pages").fadeOut();
                    $("#index").fadeIn();
                    $('#index_left').addClass('animated slideInLeft');
                    $('#index_right').addClass('animated slideInRight');
                    });
           
		});

// Spam-safe email: assemble on the fly
(function () {
  var user = "claudio";          // before @
  var domain = "example.com";    // after @
  var subj = encodeURIComponent("Portfolio Contact");
  var link = "mailto:" + user + "@" + domain + "?subject=" + subj;

  var a = document.getElementById("emailLink");
  if (a) {
    a.href = link;
    a.addEventListener("click", function(){
      document.getElementById("formStatus").textContent = "Opening your email client…";
    });
  }
})();