import React from 'react';
import {render} from 'react-dom';


// 评论栏Demo 
// import App from './components/app/app';


// Axios demo 
// import Axios_app from './components/app/axios-app';

// Router demo 
import {BrowserRouter} from "react-router-dom"
import App_Route from "./components/app/app-Route"

import  "./index.css"


render(<BrowserRouter> 
         < App_Route />
       </BrowserRouter>, document.getElementById("root")); 