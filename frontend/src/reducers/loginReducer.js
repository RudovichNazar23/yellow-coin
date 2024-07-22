import { ACTIONS } from "../utils/actions";

export default function loginReducer(state, { type, payload }){
    switch (type) {
        case ACTIONS.loading: 
            return { action: ACTIONS.loading, data: payload, error: undefined }
        case ACTIONS.complete:
            return { action: ACTIONS.complete, data: payload, error: undefined }
        case ACTIONS.error:
            return { action: ACTIONS.error, data: undefined, error: payload }
        default:
            return state;
    };
};