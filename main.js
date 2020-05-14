const screen = document.getElementById('display')

function clear_screen () {
  screen.value = ' '
}

function display_on_screen (x) {
  screen.value += x //each time I click it will show the number in //store the numbers
}

function show_result () {
  let res1 = screen.value //stores numbers and operator
  const res2 = eval(res1) //calculates
  screen.value = res2     //calculates put reslt2 and display result on the screen
}  

