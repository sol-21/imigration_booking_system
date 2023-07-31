<!DOCTYPE html>
<head>
<meta name="csrf-token" content="{{ csrf_token() }}">
  <title>Pusher Test</title>
 <script src="https://js.pusher.com/8.0/pusher.min.js"></script>
  <script>

    
    
    Pusher.logToConsole = true;

    var pusher = new Pusher('eac376f7d06961694df7', {
      cluster: 'ap2'
    });

    var channel = pusher.subscribe('my-channel');
    channel.bind('my-event', function(data) {
      alert(JSON.stringify(data));
    });
  </script>
</head>
<body>
  <h1>Pusher Test</h1>
  <p>
    Try publishing an event to channel <code>my-channel</code>
    with event name <code>my-event</code>.
  </p>
</body>