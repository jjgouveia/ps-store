import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-card-price',
	templateUrl: './card-price.component.html',
	styleUrls: ['./card-price.component.css'],
})
export class CardPriceComponent {
	@Input() price: number = 0.0;
	@Input() gameType: string = '';
}
