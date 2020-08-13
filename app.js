console.log('Its Working');

let theme = localStorage.getItem('theme')
if (theme == null) {
  setTheme('light');
} else {
  setTheme(theme);
}


let themeDots = document.getElementsByClassName('theme_dot')

for (let i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener('click', function () {
    let mode = this.dataset.mode
    console.log('Option clicked:', mode)
    setTheme(mode)
  })
}

function setTheme(mode) {
  if (mode == 'light') {
    document.getElementById('theme-style').href = './assets/css/style.css'
  }

  if (mode == 'blue') {
    document.getElementById('theme-style').href = './assets/css/blue.css'
  }

  if (mode == 'green') {
    document.getElementById('theme-style').href = './assets/css/green.css'
  }

  if (mode == 'purple') {
    document.getElementById('theme-style').href = './assets/css/purple.css'
  }
  // store theme for user in browser as key, value
  localStorage.setItem('theme', mode)
}