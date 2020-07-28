<html>

<body>
  <button id="debounce">
    Click To Debounce
    https://www.telerik.com/blogs/debouncing-and-throttling-in-javascript
  </button>
  <script>
    var button = document.getElementById("debounce");
    const debounce = (func, delay) => {
      let inDebounce
      return function debounceExecution() {
        const context = this
        const args = arguments
        clearTimeout(inDebounce)
        inDebounce = setTimeout(func, delay)
      }
    }

    function alertExc() {
      alert("Executed once every 2 seconds!!")
    }
    button.addEventListener('click', debounce(alertExc, 2000));
  </script>

</body>

</html>