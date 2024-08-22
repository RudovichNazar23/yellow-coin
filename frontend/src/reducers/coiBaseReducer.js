import { ACTIONS } from "../utils/actions";

export function coinBaseReducer(state, { type, payload }){
    switch(type){
        case ACTIONS.loading:
            return { action: ACTIONS.loading, data: payload }
        case ACTIONS.error:
            return { action: ACTIONS.error, data: payload }
        case ACTIONS.complete:
            return { action: ACTIONS.complete, data: payload }
        default:
            return state;
    };
};