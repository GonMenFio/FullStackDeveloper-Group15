import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoggerService } from './logger.service';
import { LoginComponent } from './login.component';
import { UsuarioService } from './usuario.service';


@NgModule({
	declarations: [
		AppComponent, LoginComponent, HomeComponent
	],
	imports: [
		BrowserModule
	],
	providers: [UsuarioService, LoggerService],
	bootstrap: [AppComponent]
})
export class AppModule { }
