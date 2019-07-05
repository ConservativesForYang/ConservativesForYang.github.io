export class Post extends HTMLElement {
  connectedCallback() {
    fetch(`https://api.github.com/repos/ConservativesForYang/issues/${window.location.hash.slice(1)}`, {
      headers: { "Accept": "application/vnd.github.VERSION.html+json" }
    })
    .then(data => data.json())
    .then(data => {
      const container = document.createElement('div')
      const date = document.createElement('h1')
      const title = document.createElement('h1')
      const text = document.createElement('div')

      container.classList.add('w600', 'm50')
      date.classList.add('p10', 'fg-light', 'mont14')
      title.classList.add('p10', 'fg-black', 'hind')
      text.classList.add('p10', 'fg-gray', 'lora')

      date.innerHTML = data.created_at.split('T')[0]
      title.innerHTML = data.title
      text.innerHTML = data.body_html

      container.append(date)
      container.append(title)
      container.append(text)

      this.append(container)
    })
  }
}