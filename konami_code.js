const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  window.addEventListener("keydown", function(event){
    const key=parseInt(event.key);
    console.log(key);
  })
}