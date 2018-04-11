$(document).ready( function (){
  $('#room-name').focus();
  $('#room-name').onkeyup = function(e) {
      if (e.keyCode === 13) {  // enter, return
          document.querySelector('#room-name-submit').click();
      }
  };

  $('#room-name-submit').on({
    click: function() {
        var roomName = $('#room-name').val();
        var name = $('#name').val();
        window.location.pathname = '/chat/' + name + '/' + roomName + '/';
    }
  });
});
