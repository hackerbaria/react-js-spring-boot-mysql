import { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark"></nav>
                    <div><a href="https://www.thongonline.com" className="navbar-brand">Employee Management App</a></div>
                </header>
            </div>
        )
    }
}

export default HeaderComponent