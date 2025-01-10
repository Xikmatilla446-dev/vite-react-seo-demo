import React from 'react';
import { Router } from "@reach/router"
import Home from '../Pages/Home'
import Video from '../Pages/Video'

const Routes = () => {
    return (
        <div>
			<Router>
				<Home path="/" />
				<Video path="/video" />
			</Router>
        </div>
    );
};

export default Routes;