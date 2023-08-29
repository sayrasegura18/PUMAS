import { LitElement, html } from 'lit-element';

export class Segunda extends LitElement {
  render() {
    return html`
    <style>
    @import "/src/css/segunda.css"
  </style>
  
      <div class="container">
          <div class="inner-container">
              <label>Usuarios</label>
              <div class="circle"></div>
          </div>
      </div>

      
      <div class="dropdown">
          <div class="menu-icon">&#9776;</div>
          <ul class="menu">
              <li><a href="">Vista </a></li>
              <li><a href="">Vista </a></li>
              <li><a href="l">Vista </a></li>
              <li><a href="">Vista </a></li>
              <li><a href="l">Vista </a></li>
          </ul>
      </div>
  
    `;
  }
}

customElements.define('segunda-sa',Segunda);