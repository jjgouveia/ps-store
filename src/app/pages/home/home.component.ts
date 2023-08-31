import { Component } from '@angular/core';
import { database } from './db';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
})
export class HomeComponent {
	database = database;
}
