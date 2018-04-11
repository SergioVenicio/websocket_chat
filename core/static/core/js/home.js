$(document).ready( function (){
  $('#room-name').focus();
  $(document).on({
    keyup: function(e) {
      if (e.keyCode === 13) {
        if(($('#room-name').val() != "" && typeof $('#room-name').val() !== "undifined") && ($("#name").val() && typeof $("#name").val() !== "undifined")) {
          $('#room-name-submit').click();
        } else {
          $(".form-group > input").addClass('is-invalid');$("label").addClass("text-danger");
          $("label").removeClass("text-info");
          $("label").addClass("text-danger");
        }
      }
    }
  });

  $('#room-name-submit').on({
    click: function() {
        var roomName = $('#room-name').val();
        var name = $('#name').val();
        window.location.pathname = '/chat/' + name + '/' + roomName + '/';
    }
  });
});
