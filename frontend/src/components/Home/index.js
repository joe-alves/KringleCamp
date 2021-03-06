import "./index.css";
import picture from "./aerosmithsantas.jpeg";

import {Link} from "react-router-dom";

import {useSelector} from 'react-redux';

const Home = () => {

    const loggedInUser = useSelector(state => {
        return state.session.user;
    });
    
    return (
        <div>
            <div id="home-page-container">
                <img src={picture} />
                <div id="home-page-overlay">
                    <h1>Welcome to KringleCamp!</h1>
                </div>
            </div>
            {loggedInUser && <h3>Welcome {loggedInUser.username}, come check out some <Link to="/bands">bands!</Link></h3>}
        </div>
    );
};

export default Home;