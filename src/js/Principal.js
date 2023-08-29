import { LitElement, html } from 'lit-element';

export class Principal extends LitElement {
  render() {
    return html`
    <style>
    @import "/src/css/login.css"
  </style>
  <body>
  <div class="formulario">
    <h1>PUMAS DC</h1>
    <form method="post">
      <div class="username">
        <input type="text" required>
        <label>Nombre de usuario</label>
      </div>
      <div class="contraseña">
        <input type="password" required>
        <label>Contraseña</label>
      </div>
      <br>
      <br>
      <input type="submit" value="INGRESAR">
      <a href="#" class="recordar">Olvidó su contraseña?</a>
    </form>
  </div>
  </body
    `;
  }
}

customElements.define('principal-dsa',Principal);