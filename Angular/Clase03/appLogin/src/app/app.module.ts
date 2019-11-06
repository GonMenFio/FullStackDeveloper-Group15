import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoggerService } from './logger.service';
import { LoginComponent } from './login.component';
import { UsuarioService } from './usuario.service';
import { FormularioComponent } from './formulario/formulario.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
	declarations: [
		AppComponent, LoginComponent, HomeComponent, FormularioComponent, ListadoComponent
	],
	imports: [
		BrowserModule
	],
	providers: [UsuarioService, LoggerService],
	bootstrap: [AppComponent]
})
export class AppModule { }
