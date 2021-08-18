import React, { Component } from 'react'
import Counter from './Counter'

export class Common extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             counters:[
                 {id:1,value:0},
                 {id:2,value:0},
                 {id:3,value:0},
                 {id:4,value:0},
                
                ],
              
        }
    }
    incrementHandler=(counter)=>{
        
        const counters=[...this.state.counters];
        const index=counters.indexOf(counter);
        counters[index]={...counter}
        counters[index].value++
         this.setState({
            counters:counters
        })
    }
    decrementHandler=(counter)=>{
        const counters=[...this.state.counters];
        const index=counters.indexOf(counter);
        counters[index]={...counter}
        counters[index].value--
         this.setState({
            counters:counters
        })
    }
    deleteHandler=(id)=>{
        const counters=[...this.state.counters];
        const updated=counters.filter(counter=>counter.id!==id);
        this.setState({
            counters:updated
        })
    }
    resetHandler=()=>{
        const counters=[...this.state.counters];
        counters.map(counter=>counter.value=0)
        this.setState({
            counters:counters
        })
    }
    
    render() {
        return (
            <div>
                <h1 className="display-4 text-center border">Counter App</h1>
                <button className="btn btn-primary m-2" onClick={this.resetHandler}>Reset</button>   
                {this.state.counters.map((counter,index)=>{
                   return <Counter key={counter.id} info={counter} 
                   onIncrement={this.incrementHandler}
                   onDecrement={this.decrementHandler}
                   onDelete={this.deleteHandler}
                   
                   />
                })}
            </div>
        )
    }
}

export default Common
