import React from "react"
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import App from "../containers"
import Home from "../containers/home"
import Page2 from "../containers/page2"
import Page3 from "../containers/page3"
import Page4 from "../containers/page4"
import  style from './style.less'

class RouterMap extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			initDone: false
		}
	}
	render() {
		return (

			<BrowserRouter>
				{
					this.state.initDone
						? <div className={style["main_warrper"]}>
							<Switch>
								<App>
									<Route exact path="/" component={Home}/>
									<Route exact path="/page2"component={Page2}/>
									<Route path="/page3" component={Page3}/>
									<Route path="/page4"component={Page4} />
								</App>
							</Switch>
						</div>
						: <div>正在加载...</div>
				}
			</BrowserRouter>
		)

	}

	componentDidMount() {


		this.setState({
			initDone: true
		})
	}

}

export default RouterMap