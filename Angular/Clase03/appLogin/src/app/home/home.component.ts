import { Component, Input, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	@Input() info

	/* 	private servicioUsuario: UsuarioService
	
		constructor(servicioUsuario: UsuarioService) {
			this.servicioUsuario = servicioUsuario
		} */


	lista: Array<string> = ["Carmen", "Marcela", "Oscar", "Carlos"]

	constructor(private servicioUsuario: UsuarioService) { }


	mostrarData() {
		console.log("correo", this.servicioUsuario.correo)
	}

	ngOnInit() {
	}

}
