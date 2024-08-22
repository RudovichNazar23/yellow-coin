import { useReducer, useEffect, useState } from "react";
import api from "../../utils/api";
import { ACTIONS } from "../../utils/actions";
import { coinBaseReducer } from "../../reducers/coiBaseReducer";

import Loading from "../Loading";
import SearchInput from "../CoinBaseComponents/SearchInput";
import CoinList from "../CoinBaseComponents/CoinList";
import CoinCard from "../CoinBaseComponents/CoinCard";

export default function CoinBase(){

    const INITIAL_STATE = {
        action: ACTIONS.initial,
        data: undefined
    };

    const [state, dispatch] = useReducer(coinBaseReducer, INITIAL_STATE);
    const [currentCoin, setCurrentCoin] = useState(undefined);

    useEffect(
        () => {
            dispatch({ type: ACTIONS.loading, payload: undefined });
            const response = api.get("/coin_base/coin_list/");
            response
            .then((res) => { 
                    if(res.status === 200){
                        dispatch({ type: ACTIONS.complete, payload: res.data });
                        setCurrentCoin(res.data[0]);
                    }
                }
            )
            .catch((error) => dispatch({ type: ACTIONS.error, payload: error.response.data }));
        }, []
    );

    const onSetCurrentImage = (event) => {
        setCurrentCoin(state.data[event.currentTarget.id]);
    };

    if(state.action === ACTIONS.initial){
        return (
            <>
                <SearchInput />
                <div className="row mt-2 align-items-center justify-content-center">
                    <div className="col-10 border text-center">
                        There is no any coins...
                    </div>
                </div>
            </>
        );
    }
    
    if(state.action === ACTIONS.loading){
        return (
            <div className="row vh-100">
                <div className="container-fluid d-flex flex-row align-items-center justify-content-center">
                    <Loading />
                </div>
            </div>
        );
    };

    if(state.action === ACTIONS.error){
        return <div>
            Error...
        </div>
    }

    return (
        <div className="row mt-1 p-1">
            <SearchInput/>
            <div className="row mt-1 p-1 justify-content-around">
                <CoinList coinsArray={state.data} onSetCurrentImage={onSetCurrentImage}/>
                <CoinCard coin={currentCoin}/>
            </div>
        </div>
    );
};