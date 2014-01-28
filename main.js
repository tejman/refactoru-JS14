$(function() {

  var addPot = function(Obj) {
    var xLoc = Obj.pageX;
    var yLoc = Obj.pageY;
    var newLoc = $(".container .new-loc:last").clone();
    
    newLoc.css({"top":yLoc-12, "left":xLoc-13});
    newLoc.insertAfter(".map");
    newLoc.show();
    addNote(xLoc, yLoc, newLoc);
  };

  var addNote = function(x, y, potPic) {
    var newNote = potPic.find(".note");
  
    newNote.find(".add-note").show();
    newNote.find(".add-note").focus();
  };

  var takeNote = function(elem) {
    noteText = $(elem).siblings(".note-text");
    noteText.text($(elem).val());
  };


  $(document).on("click", ".map", function(e) {
    addPot(e);
  });

  $(document).on("click", ".pot", function() {
    $(this).closest(".new-loc").remove();
  });

  $(document).on("keydown", ".add-note", function(e) {
    if (e.keyCode===13) {
      e.preventDefault();
      console.log("enter keyed");
      takeNote(this);
      $(this).hide();
    };
  });

  $(document).on("mouseenter", ".pot", function() {
    $(this).parent().find(".note-text").css("display", "inline-block");
  });

  $(document).on("mouseleave", ".pot", function() {
    $(this).parent().find(".note-text").hide();
  });


    
  

});
