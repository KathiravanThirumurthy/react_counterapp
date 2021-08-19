import React, { Component } from 'react'
import Counters from './Counters';
import Navbar from './Navbar';

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
                <Navbar totalCounter={this.state.counters.filter(counter=>counter.value > 0).length }/>
               
                <Counters counters={this.state.counters} 
                    onIncrement={this.incrementHandler}
                   onDecrement={this.decrementHandler}
                   onDelete={this.deleteHandler}
                   onReset={this.resetHandler}
                />
                
            </div>
        )
    }
}

export default Common
