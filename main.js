import './styles.scss'

/* document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
` */
const fakeJson = ["ni", "ni"];
fakeJson.forEach((el) => {
  const t = document.createElement("img");
  t.src = el + ".jpg"
  document.body.appendChild(t)

})