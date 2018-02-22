import React from "react"
import {Link} from "react-router-dom"
import bg from "../static/img/home/wode1.png";
import  style from './style.less'
class App extends React.Component {

    constructor(...args) {
        super(...args)
       
    }
    render() {
        return (
            <div>
                {this.props.children}
                <footer className={style.footer}>
                    <div className={style.menu}>
                        <Link  to="/">
                            <div className={style.menuImage} ></div>
                            <p>BOX商城</p>
                        </Link>
                    </div>
                    <div className={style.menu}>
                        <Link to="/page2">
                                <div className={style.menuImage}></div>
                                <p >单品SHOW</p>
                        </Link>
                    </div>
                    <div className={style.menu}>
                          <Link to="/page3">
                            <div className={style.menuImage}>
                            </div><p >BOX定制</p>
                        </Link>
                    </div>
                    <div className={style.menu}>
                          <Link to="/page4">
                            <div className={style.menuImage}></div>
                            <p >我的</p>
                          </Link>
                    </div>
                </footer>
                </div>
        )
    }
   

}


export default App
