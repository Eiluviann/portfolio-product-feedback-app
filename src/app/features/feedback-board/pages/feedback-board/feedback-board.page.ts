import { Component, signal } from '@angular/core';
import { BoardBarComponent } from '../../components/board-bar/board-bar.component';
import { BoardSortingOptions } from '../../types/board-sorting-options.enum';

@Component({
	selector: 'app-feedback-board',
	standalone: true,
	imports: [BoardBarComponent],
	templateUrl: './feedback-board.page.html',
	styleUrl: './feedback-board.page.scss',
})
export class FeedbackBoardComponent {
	selectedSortingOption = signal(BoardSortingOptions.MostUpvoted);
}
