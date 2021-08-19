import React, { Component } from 'react'
import Counter from './Counter';

export class Counters extends Component {
    render() {
        const {counters}=this.props;
        
        return (
            <div>
            <button className="btn btn-primary m-2" onClick={this.props.onReset}>Reset</button>   
                {counters.map((counter,index)=>(
                     <Counter key={counter.id} info={counter} 
                   onIncrement={this.props.onIncrement}
                    onDecrement={this.props.onDecrement}
                    onDelete={this.props.onDelete}
                    
                    />
                ))}
            </div>
        )
    }
}

export default Counters
