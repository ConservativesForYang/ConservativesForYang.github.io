export class Router extends HTMLElement {
  static get observedAttributes() {
    return ['route']
  }

  attributeChangedCallback(name, _, newRoute) {
    if (name === 'route') {
      const path = newRoute.split('#')[0]

      const template = document.querySelector(`[path=\\${path}]`)
      const page = document.importNode(template.content, true)

      window.history.pushState({}, newRoute, window.location.origin + newRoute)
      
      this.innerHTML = ''
      this.appendChild(page)
    }
  }

  connectedCallback() {
    this.setAttribute('route', window.location.pathname + window.location.hash)
    window.onpopstate = () => this.setAttribute('route', window.location.pathname + window.location.hash)
  }
}