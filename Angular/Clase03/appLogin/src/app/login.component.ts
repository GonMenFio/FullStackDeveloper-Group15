import { Component, EventEmitter, Input, Output } from "@angular/core";
import { UsuarioService } from './usuario.service';


@Component({
	selector: "login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.css"]
})
export class LoginComponent {

	@Input() headline
	@Output() onLogging = new EventEmitter()

	instancia: UsuarioService

	constructor(servicio: UsuarioService) {
		this.instancia = servicio
	}

	correo: string
	contrasena: string

	loguearse() {
		this.instancia.correo = this.correo
		this.instancia.contrasena = this.contrasena
		this.instancia.login()
		/* this.onLogging.emit({ correo: this.correo.trim(), contrasena: this.contrasena.trim() }) */
	}

	valorIngresado(evt) {
		this.correo = evt.target.value
	}


}
