import { Routes } from '@angular/router';

export const routes: Routes = [
	{ path: '', redirectTo: 'board', pathMatch: 'full' },
	{
		path: 'board',
		loadChildren: () =>
			import('./features/feedback-board/feedback-board.routes').then(
				(m) => m.FEEDBACK_BOARD_ROUTES,
			),
	},
];
