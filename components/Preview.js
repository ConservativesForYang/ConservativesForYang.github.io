export class Preview extends HTMLElement {
  connectedCallback() {
    fetch('https://api.github.com/repos/ConservativesForYang/ConservativesForYang.github.io/issues?per_page=100&labels=post')
      .then(data => data.json())
      .then(data => data.forEach(issue => {
        const container = document.createElement('x-link')
        const date = document.createElement('h1')
        const title = document.createElement('h1')
        const text = document.createElement('p')

        container.classList.add('p10', 'm50', 'block')
        date.classList.add('p10', 'fg-light', 'mont14')
        title.classList.add('p10', 'fg-black', 'hind')
        text.classList.add('p10', 'fg-gray', 'lora')

        container.setAttribute('to', '/post#' + issue.number)

        date.innerHTML = issue.created_at.split('T')[0]
        title.innerHTML = issue.title
        text.innerHTML = issue.body

        container.append(date)
        container.append(title)
        container.append(text)

        this.append(container)
      }))
  }
}
