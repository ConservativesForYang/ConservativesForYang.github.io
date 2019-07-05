export class Link extends HTMLElement {
  connectedCallback() {
    this.addEventListener('click', () => {
      document.querySelectorAll('x-router').forEach(router => {
        router.setAttribute('route', this.getAttribute('to'))
      })
    })
  }
}