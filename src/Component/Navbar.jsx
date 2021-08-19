import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        console.log(this.props);
        return (
     <div>
            
         <nav className="navbar navbar-light bg-light">
           <a className="navbar-brand" href="#"> Navbar <span className="badge badge-pill badge-warning">{this.props.totalCounter}</span></a>
        </nav>
    </div>
        )
    }
}

export default Navbar
