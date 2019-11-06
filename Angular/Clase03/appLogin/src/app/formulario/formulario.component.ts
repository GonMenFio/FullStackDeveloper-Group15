import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../personas.service';

@Component({
	selector: 'app-formulario',
	templateUrl: './formulario.component.html',
	styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

	nombre: string

	constructor(private personasService: PersonasService) { }

	ngOnInit() {
	}

	agregar() {
		this.personasService.lista.push(this.nombre)
	}

}
