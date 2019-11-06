import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../personas.service';

@Component({
	selector: 'app-listado',
	templateUrl: './listado.component.html',
	styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

	constructor(private personasService: PersonasService) { }

	ngOnInit() {
	}

}
