import { LitElement, html } from "lit-element";

export class loginbody extends LitElement {
  createRenderRoot() {
    return this;
  }
  render() {
    return html`
      <style>
        @import "/src/css/style.css";
      </style>

      <section>
      <form action="" method="">
        <div>
          <input type="text" id="user" name="user" placeholder="Usuario" required autofocus pattern="[A-Za] {2, 40}">
        </div>
        <div>
          <input type="text" id="password" name="password" placeholder="Contraseña" required>
        </div>
        <div class="button">
          <button> Ingresar </button>
        </div>
        <div>
          <a href="">¿Olvido su contraseña?</a>
        </div>
      </form> 
    </section>
    `;
  }
}
customElements.define("my-loginbody", loginbody);
