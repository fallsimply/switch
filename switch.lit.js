import {LitElement, html, css} from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module'

class Switch extends LitElement {
	static get styles() {
		return [
			css`
				:host {
					--switch: hsl(0, 0%, 73%);
					--switch-active: hsl(231, 48%, 48%);
					--switch-knob-radius: 10px;
					--switch-radius: 7px;
					--switch-offset: calc(var(--switch-knob-radius) - var(--switch-radius));
				}
				.switch {
					position: relative;
					display: block;
					width: 36px;
					height: calc(2 * var(--switch-knob-radius));
					margin: var(--switch-offset) 0;
				}
				.switch input:focus ~ .switchbg {
					outline: 1px solid rgb(77, 144, 254);
				}
				.switch input:checked ~ .switchbg{
					background: var(--switch-active);
					filter: saturate(50%) brightness(150%)
				}
				.switch input:checked ~ .nub {
					background: var(--switch-active);
					right: 0
				}
				.switch input ~ .switchbg {
					background-color: var(--switch);
				}
				.switchbg {
					display: block;
					width: 36px;
					height: calc(2 * var(--switch-radius));
					border-radius: var(--switch-radius);
					position: absolute;
					top: 0;
					margin: var(--switch-offset) 0;
				}
				.switch input {
					width: 36px;
					height: calc(2 * var(--switch-knob-radius));
					margin: 0;
					opacity: 0;
					position: absolute;
				}
				.nub {
					width: calc(2 * var(--switch-knob-radius));
					height: calc(2 * var(--switch-knob-radius));
					position: absolute;
					top: 0;
					border-radius: 50%;
					background: white;
					z-index: 1;
					box-shadow: 0px 0px 5px rgba(0,0,0,0.2);
				}
			`
		]
	}
	static get properties() {
		return {
			name:    {
				type: String
			},
			checked: {
				type: Boolean
			},
		}
	}

	constructor() {
		super()
		this.name = "switch"
		this.checked = false
	}

	toggleChecked() {
		this.checked = !this.checked;
		this.toggleEvent();
	}

	toggleEvent() {
		let event = new CustomEvent('toggle', {
			detail: {
				message: 'Switch Toggled'
			}
		});
		this.dispatchEvent(event);
	}

	render() {
		return html`
			<label class="switch" role="tab">
				<input type="checkbox" name="${this.name}" id="nub" ?checked=${this.checked} @change="${this.toggleChecked}">
				<span class="nub"></span>
				<div class="switchbg"></div>
			</label>
		`
	}

}
customElements.define("mk-switch", Switch)
