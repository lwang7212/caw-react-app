export const NAME = 'app';
/**
 * Actions Type
 * @type {string}
 */
export const APP_START = `${NAME}/APP_START`;

/**
 * Action Creators
 * @returns {{type: string}}
 */
export function loadStartApp() {
    return { type: APP_START };
}
/**
 * Reducer
 * @param state
 * @param action
 * @returns {{}}
 */
export default function reducer(state = {}, action = {}){
    switch (action.type) {
        case  APP_START:
            return { ...state}
        default:
          return state;
    }
}



