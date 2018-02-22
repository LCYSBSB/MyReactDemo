import React from "react"
import {render} from "react-dom"
import {Provider} from "react-redux"
import { BrowserRouter, HashRouter } from 'react-router-dom'
import RouterMap from "./router/routerMap"
import { AppContainer } from 'react-hot-loader'
// import congfigureStore from "./store/congfigureStore"

var FastClick = require('fastclick')
FastClick.attach(document.body)
import "./static/css/common.less"
import './static/css/font.css'


render(
        <AppContainer>
          <BrowserRouter basename="/">
				    	<RouterMap />
			    	</BrowserRouter>
          </AppContainer>,
        document.getElementById("root")
)