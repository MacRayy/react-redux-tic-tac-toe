export default (state, action) => {
	switch (action.type) {
		case 'CHANGE_GAME_STATE':
			return {
				...state,
				squares: action.newGameState.squares,
      	xIsNext: action.newGameState.xIsNext,
			}
			break
		default:
			return state
	}
}
