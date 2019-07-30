import {LitElement, html} from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module'

class Switch extends LitElement {
    static get properties() {
        return { 
          name: { type: String },
          checked: { type: Boolean }
        }
    }
    constructor() {
        super()
        this.name = "switch"
        this.checked = false
    }
    render() {
        return html`
            <label class="switch" role="tab">
                <input type="checkbox" name="${this.name}" id="nub" ?checked=${this.checked}>
                <span class="nub"></span>
                <div class="switchbg"></div>
            </label>
            <link rel="stylesheet" href="https://switch.fallproject.org/switch.css">
        `
    }

}
customElements.define("mk-switch", Switch)
