<html>

<body>
  <button id="debounce">
    Click To Throttling
    https://www.telerik.com/blogs/debouncing-and-throttling-in-javascript
  </button>
  <script>
    var button = document.getElementById("debounce");
    var timerId;
    const throttle = (func, delay) => {
      return function abc() {
        if (timerId) {
          return
        }
        timerId = setTimeout(function() {
          func()
          timerId = undefined
        }, delay)
      }
    }
    button.addEventListener('click', throttle(function() {
      alert("Executed once every 2 seconds!!")
    }, 2000));
  </script>

</body>

</html>