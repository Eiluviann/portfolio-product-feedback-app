export enum BoardSortingOptions {
	MostUpvoted = 'most_upvoted',
	LeastUpvoted = 'least_upvoted',
	MostComments = 'most_comments',
	LeastComments = 'least_comments',
}

export const BoardSortingLabels: Record<BoardSortingOptions, string> = {
	[BoardSortingOptions.MostUpvoted]: 'Most upvoted',
	[BoardSortingOptions.LeastUpvoted]: 'Least upvoted',
	[BoardSortingOptions.MostComments]: 'Most comments',
	[BoardSortingOptions.LeastComments]: 'Least comments',
};
