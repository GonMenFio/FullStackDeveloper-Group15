import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class PersonasService {

	lista: Array<string> = []

	constructor() { }
}
