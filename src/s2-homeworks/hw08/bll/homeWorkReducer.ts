import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

function compareByName(a: UserType, b:UserType) {
    return a.name.localeCompare(b.name, 'ru', { sensitivity: 'accent' });
}

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            if (action.payload === 'up') {
                return state.slice().sort((a, b) => compareByName(a,b))
            } else {
                return state.slice().sort((a, b) => compareByName(b,a))
            }
            // need to fix
        }
        case 'check': {
            return state.filter(user => user.age >= 18) // need to fix
        }
        default:
            return state
    }
}
