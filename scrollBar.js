  // This code makes the bottom blue bar toggle between fixed and static
  // (SOMEHOW THIS WORKS LOL) Problem: Text-Wrapping within my <li> elements caused the height measurements to mess up
  $(window).on("load", function() {
    // Window Height
    windowH = $(window).height();
    
    // NavBar Height
    $nav = $(".navbar");
    navHeight = $nav.outerHeight(true);
    
    // About Box Height
    $aboutBox = $("#about-box");
    aBH = $aboutBox.outerHeight();
    
    // About Box Spacer Height
    $aboutSpacer = $("#aboutSpacer");
    aSH = $aboutSpacer.outerHeight(true);
    
    // Bottom Spacer Height
    $bottomSpacer = $("#bottomSpacerFixed");
    bottomSpacerH = $bottomSpacer.outerHeight(true);
    
    // Bottom Trigger Height
    bottomTrigger = navHeight + aBH + aSH + bottomSpacerH;    

    // console.log("Window Height: " + windowH)
    // console.log("Navbar Height: " + navHeight)
    // console.log("About Box Height: " + aBH)
    // console.log("About Spacer Height: " + aSH)
    // console.log("Bottom Spacer Height: " + bottomSpacerH)
    // console.log("BottomTrigger: " + bottomTrigger)
  });
  
  // Scroll Event 
  $(window).scroll(function (event) {
      var scroll = $(window).scrollTop();
      var scrollBottom = scroll + windowH;
      
      //var scrollBottom = scroll + wHeight;
          // Do something
      if (scrollBottom > bottomTrigger) {
          $("#bottomSpacerFixed").css("position", "static");
      }
      else {
          $("#bottomSpacerFixed").css("position", "fixed");
      }
      
      // console.log("Scroll Bottom Position: " + scrollBottom)
      // console.log("Scroll Bottom Position: " + scrollBottom)
    }
  );