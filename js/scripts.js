
$(function() {
//Login button modal show
   $("#loginButton").click(function(){
    $("#loginModal").modal("show");
    // if ($(".close").modal("hide"));
 //Login button modal hide
  });
  $(".close").click(function(){
    $("#loginModal").modal("hide");

  });
//Reserve button modal show
    $("#reserveButton").click(function(){
    $("#reserveModal").modal("show")
    });
//Login button modal hide
    $(".close").click(function(){
        $("#reserveModal").modal("hide");
    
      });
  });