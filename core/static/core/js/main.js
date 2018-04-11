$(document).ready( function (){
  var name = $("#name").val();
  var roomName = $("#room_name").val();
  var chatSocket = new WebSocket(
      'ws://' + window.location.host +
      '/ws/chat/' + name + '/' + roomName + '/');

  chatSocket.onmessage = function(e) {
      var data = JSON.parse(e.data);
      var message = data['message'];
      var chat_log = $('#chat-log').val();
      $('#chat-log').val(chat_log + (message + '\n'));
  };

  chatSocket.onclose = function(e) {
      console.error('Chat socket closed unexpectedly');
  };

  $('#chat-message-input').focus();
  $('#chat-message-input').on({
    keyup: function(e) {
        if (e.keyCode === 13) {
            $('#chat-message-submit').click();
        }
    }
  });

  $('#chat-message-submit').on({
    click: function() {
        var messageInputDom = $('#chat-message-input');
        var message = $(messageInputDom).val();
        chatSocket.send(JSON.stringify({
            'message': name + ': ' + message
        }));
        messageInputDom.value = '';
    }
  });

});
