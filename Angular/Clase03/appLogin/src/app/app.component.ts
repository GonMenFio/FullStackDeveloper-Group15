import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	visible: boolean = true
	infoUsuario = {}

	titulo: string = "Ingrese sus credenciales"

	constructor() {
		/* setTimeout(() => {
			this.visible = false
		}, 3000) */
	}

	cambiarVisibilidad() {
		this.visible = !this.visible
	}

	login(data) {
		this.infoUsuario = data
		console.log(data)
		this.visible = false
	}
}
