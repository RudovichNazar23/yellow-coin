export default function CoinList({ coinsArray, onSetCurrentImage }){
    return (
        <div className="col-8 border m-1 g-2 p-2 border rounded border-secondary d-flex flex-column justify-content-center">
            {
                coinsArray && (
                    coinsArray.map(
                        (coin, coinIndex) => {
                            return (
                                <div className="border rounded m-1 text-center" id={coinIndex} onClick={onSetCurrentImage} key={coinIndex}>
                                    { coin.title }
                                </div>
                            )
                        }
                    )
                )
            }
        </div>
    );
};