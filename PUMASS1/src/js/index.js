import { LitElement, html } from "lit-element";
import "./Login/logincontent"


export class Index extends LitElement {
  createRenderRoot() {
    return this;
  }
  render() {
    return html`
    <style>
        @import "/src/css/style.css";
    </style>
    <my-logincontent></my-logincontent>
    `;
  }
}
customElements.define('my-index', Index);