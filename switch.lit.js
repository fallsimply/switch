import {LitElement} from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';
import {html, directive} from "https://unpkg.com/lit-html@1.1.0/lit-html.js?module";

const checkedattr = directive((checked) => (part) => { 
    console.log("test")
    if (checked) {
        part.committer.element.setAttribute("checked", "")
    }
});

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

    // Render element DOM by returning a `lit-html` template.
    render() {
        return html`
            <label class="switch" role="tab">
                <input type="checkbox" name="${this.name}" id="nub" attr=${checkedattr(this.checked)}>
                <span class="nub"></span>
                <div class="switchbg"></div>
            </label>
            <link rel="stylesheet" href="https://switch.fallproject.org/switch.css">
        `
    }

}
customElements.define("mk-switch", Switch)