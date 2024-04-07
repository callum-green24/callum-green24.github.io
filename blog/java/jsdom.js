// button
function toggleText() {
  var button = document.getElementById('something')
  if (button.innerHTML === 'Button') {
    button.innerHTML = 'Something'
  } else {
    button.innerHTML = 'Button'
  }
}

document.getElementById('something').onclick = toggleText
