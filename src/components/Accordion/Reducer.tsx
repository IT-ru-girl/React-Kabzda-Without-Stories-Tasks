type ActionType = {
    type: string
}
export const TOGGLE_CONSTANT = 'TOGGLE-COLLAPSED'

type StateType ={
    accordionCollapsed: boolean
}
export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case TOGGLE_CONSTANT:
            const stateCopy = {...state, accordionCollapsed: !state.accordionCollapsed}
            // stateCopy.accordionCollapsed = !state.accordionCollapsed   так или как сверху перезатирание противоположным значением
            return stateCopy;
        default:
            throw new Error('bad action type')
        // return state;
    }
    return state
    // if (action.type === 'TOGGLE-COLLAPSED') {
    //     return !state
    // }
    // else {
    //     return state
    // }
}