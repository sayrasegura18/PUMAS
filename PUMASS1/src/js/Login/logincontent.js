import { LitElement, html } from "lit-element";
import "./loginbody"

export class logincontent extends LitElement {
  createRenderRoot() {
    return this;
  }
  render() {
    return html`
      <style>
        @import "/src/css/style.css";
      </style>
      <div class="content">
        <h1>PUMA DC</h1>
        <my-loginbody></my-loginbody>
      </div>
    `;
  }
}
customElements.define('my-logincontent', logincontent);
