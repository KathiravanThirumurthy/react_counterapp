import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isEnabled:true
        }
    }
    
    render() {
        const {info}=this.props;
        const {onIncrement,onDecrement,onDelete}=this.props;
        
        return (
            <div className="row mb-2">
                <div className="col">
                            {info.value === 0 ? <p className="badge badge-warning p-2" >ZERO</p>:
                            
                            <p className="badge badge-primary p-2">{info.value}</p>}
                </div>
                <div className="col">
                    <button className="btn btn-secondary" onClick={()=>onIncrement(info)}>+</button>
                </div>
                <div className="col">
               
                <button className="btn btn-secondary" disabled={info.value === 0 ? "disabled":""} onClick={()=>onDecrement(info)} >-</button>
                </div>
                <div className="col">
                <button className="btn btn-danger btn-sm" onClick={()=>onDelete(info.id)}>Delete</button>   
                </div>
               
            </div>
        )
    }
}

export default Counter
