import { Component, Input, Signal, signal } from '@angular/core';
import { UiButtonComponent } from '../../../../shared/ui/components/ui-button/ui-button.component';
import { faLightbulb } from '@fortawesome/sharp-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { ButtonType } from '../../../../shared/ui/components/ui-button/button-type.enum';
import { faPlus } from '@fortawesome/sharp-solid-svg-icons';
import {
	BoardSortingOptions,
	BoardSortingLabels,
} from '../../types/board-sorting-options.enum';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-board-bar',
	standalone: true,
	imports: [UiButtonComponent, FaIconComponent, FormsModule],
	templateUrl: './board-bar.component.html',
	styleUrl: './board-bar.component.scss',
})
export class BoardBarComponent {
	@Input({ required: true })
	selectedSortingOption!: Signal<BoardSortingOptions>;
	suggestionCount = signal(8);
	readonly faPlus = faPlus;
	readonly faLightbulb = faLightbulb;
	readonly ButtonType = ButtonType;
	readonly sortingOptions = Object.values(BoardSortingOptions);
	readonly BoardSortingLabels = BoardSortingLabels;
	protected readonly BoardSortingOptions = BoardSortingOptions;
}
