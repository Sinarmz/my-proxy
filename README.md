<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Proxy</title>
</head>
<body>
<h2>🌐 Proxy</h2>
<input id="url" placeholder="https://example.com" style="width:80%;padding:8px"/>
<button onclick="go()">Go</button>
<br><br>
<iframe id="frame" width="100%" height="800px"></iframe>
<script>
function go(){
  var url = document.getElementById('url').value;
  document.getElementById('frame').src = url;
}
</script>
</body>
</html>
