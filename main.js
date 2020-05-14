const screen = document.getElementById('screen')

function clear_screen () {
  screen.value = ' '
}

function display_on_screen (x) {
  screen.value += x
}

function show_result () {
  let val = screen.value
  val = eval(val)
  screen.value = val
}

