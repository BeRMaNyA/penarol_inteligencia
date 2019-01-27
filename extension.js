(function () {
  const app = window.location.href.match(/\.(.*)\.com\.uy/)[1]

  function run() {
    if (app == 'elobservador')
      setInterval(elobservador, 1000)
    else
      elpais()
  }
  
  function elobservador() {
    const el = document.querySelector('.cuerpo.fade')

    if (el) {
      el.classList.remove('fade')
      _owned()
    }

    _adBlocker()
  }

  function elpais() {
    const script = document.createElement('script')

    script.textContent = `
      statusUser.logged_in = true
      statusUser.user.is_suscriber = true

      $(document).ready(function() {
        if ($('.contenido-exclusivo-nota').length) {
          const url = 'https://cors.io/?http://192.81.212.22:8080/${window.location.href}'

          $('.content-modules').load(url)
        }
      });
    `
    document.body.appendChild(script)
    setTimeout(_adBlocker, 500)
    _owned()
  }

  function _adBlocker() {
    const selectors = [
      'iframe', '.mensaje_paywall2', '.mensaje_member', '.contenedor_publicidad',
      '.btn--reportar-error', '.content-module-free-html', '.widgetgoogle'
    ]

    selectors.forEach(_removeElements)
  }

  function _removeElements(selector) {
    document.querySelectorAll(selector).forEach((el) =>
      el.parentNode.removeChild(el)
    )
  }

  function _owned() {
    console.log('owned 😂 !!')
  }

  run()
}())
