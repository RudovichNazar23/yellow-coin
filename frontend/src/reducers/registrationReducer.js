import { ACTIONS } from "../utils/actions";

export default function registrationReducer(state, { type, payload }){
    switch (type) {
        case ACTIONS.loading:
            return { ...state, ["action"]: ACTIONS.loading };
        case ACTIONS.error:
            return { ...state,  ["action"]: ACTIONS.error, ["errors"]: payload };
        case ACTIONS.complete:
            return { ...state, ["action"]: ACTIONS.complete};
        default:
            return state;
    }
};