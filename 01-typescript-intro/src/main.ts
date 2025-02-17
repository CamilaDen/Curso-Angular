import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
// import './topics/01-basics-types.ts'
// import './topics/02-object-interface.ts'
// import './topics/03-functions.ts'
// import './topics/04-homework-types.ts'
// import './topics/05-basic-destructuring.ts'
// import './topics/06-functions-destructuring.ts'
// import './topics/07-import-export.ts'
// import './topics/08-clases.ts'
// import './topics/09-generics.ts'
// import './topics/10-decorators.ts'
import './topics/11-optional-chaining.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <p>HOLA MUNDO</p>
  </div>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`
console.log('Hola Consola');
setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
