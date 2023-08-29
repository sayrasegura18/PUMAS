import { LitElement, html } from 'lit-element';

export class Segunda2 extends LitElement {
  render() {
    return html`
    <style>
    @import "/src/css/segunda.css"
    <div class="gray-box">
        <ul class="list">
            <!-- Elementos de la lista -->
            <li><img src="img/baloncito.png" alt=" ">Home</li>
            <li><img src="img/baloncito.png" alt=" ">Presidencia</li>
            <li><img src="img/baloncito.png" alt=" ">Presidencia</li>
            <li><img src="img/baloncito.png" alt="">Vice-presidencia</li>
            <li><img src="img/baloncito.png" alt=" ">Secretaria</li>
            <li><img src="img/baloncito.png" alt=" ">Tesoreria</li>
            <li><img src="img/baloncito.png" alt=" ">Revisoria fiscal</li>
            <li><img src="img/baloncito.png" alt=" ">Lista afiliados</li>
            <li><img src="img/baloncito.png" alt=" ">Lista jugadores</li>
            <li><img src="img/baloncito.png" alt=" ">Lista coach's</li>
        </ul>
        
    </div>

    <div class="row1">
        <div class="card">
            <h2>Actas</h2>
            <br>
            <img src="img/icon1.png" >
            <button>Gestionar</button>
        </div>
        <div class="card">
            <h2>Certificados</h2>
            <br>
            <img src="img/icon2.png" alt="Descripción de la imagen">
            <button>Gestionar</button>
        </div>
        <div class="card">
            <h2>Reuniones</h2>
            <br>
            <img src="img/icon3.png" alt="Descripción de la imagen">
            <button>Gestionar</button>
        </div>
    </div>

    <div class="row2">
        <div class="card">
            <h2>Asistencia</h2>
            <br>
            <img src="img/icon4.png" alt="Descripción de la imagen">
            <button>Gestionar</button>
        </div>
        <div class="card">
            <h2>Comunicación</h2>
            <br>
            <img src="img/icon5.png" alt="Descripción de la imagen">
            <button>Gestionar</button>
        </div>
        <div class="card">
            <h2>Estado de cuenta</h2>
            <br>
            <img src="img/icon5.png" alt="Descripción de la imagen">
            <button>Gestionar</button>
        </div>
    </div>
    `;
  }
}

customElements.define('segunda-lol',Segunda);