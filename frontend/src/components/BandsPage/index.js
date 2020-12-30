import {fetch} from '../../store/csrf';
import {useEffect, useState} from "react";

import {useDispatch, useSelector} from "react-redux";
import {fetchAllBands} from "../../store/bands";

const Band = ({theBand}) => {

    return (
        <div>
            <h3>{theBand.name}</h3>
            <img src={theBand.coverPhotoUrl} />
        </div>
    );

};

const BandsPage = () => {

    const dispatch = useDispatch(); 
    
    const currentBands = useSelector(fullReduxState => {
        return fullReduxState.bands;
    });

    // With an empty array: 
    // do this once when this component is first shown
    useEffect(async () => {
        // Request to the server.
        // const response = await fetch("/api/bands");
        // setBands(response.data.bands);
        dispatch(
            fetchAllBands()
        );
    }, []);

    return (
        <div id="bands-page">
            <h2>Check out these awesome Santa bands . . .</h2>
            {!currentBands && <h3>Loading ..........</h3>}
            {currentBands && currentBands.map(band => {
                return <Band theBand={band} />;
            })}
        </div>
    );
};

export default BandsPage;