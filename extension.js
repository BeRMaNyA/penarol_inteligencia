(function () {
  let app = (window.location.href.match(/elobservador/)) ? 'elobservador' : 'elpais';

  function run() {
    app == 'elobservador' ? setInterval(elobservador, 1000) : elpais();

    setTimeout(_removeIframes, 1000);
  }
  
  function elobservador() {
    let el = document.querySelector('.cuerpo.fade');

    if (el) {
      el.classList.remove('fade');
      document.querySelector('.mensaje_paywall2').innerHTML = '';
      console.log('hacked 😂 !!')
    }
  }

  function elpais() {
    if (!document.querySelector('body').dataset.hacked) {
      let script = document.createElement("script");

      script.textContent = `
        statusUser.logged_in = true;
        statusUser.user.is_suscriber = true;
        document.body.dataset.hacked = true;
      `;

      document.body.appendChild(script);

      console.log('hacked 😂 !!')
    }
  }

  function _removeIframes() {
    document.querySelectorAll('iframe').forEach((iframe) => {
      iframe.parentNode.removeChild(iframe)
    })
  }

  run()
}());
