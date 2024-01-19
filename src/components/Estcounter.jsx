import React, { Component } from 'react';
import "./estcounter.css";

class Estcounter extends Component {
    state = { count:0 } 

    onIncrement = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }))
      }
    onDecrement = () => {
        this.setState((prevState) => ({ count: prevState.count - 1 }))
      }
    render() {
        const { count } = this.state 
        return (
            <>
            <div className='m-container text-center'>
                <h1>Select the rooms you’d like us to design</h1>
                <p>To know more about this, <span className=' s'>click here</span></p>
                <div className='text-center'>
                <div className='d-flex  card'> 
                   <h1>Living Room</h1>
                 <div>
                        <button onClick={this.onDecrement}>-</button>
                        {count}
                        <button onClick={this.onIncrement}>+</button>
                    </div>
                </div>
                <div className='d-flex card'> 
                   <h1>Kitchen</h1>
                 <div>
                        <button onClick={this.onDecrement}>-</button>
                        {count}
                        <button onClick={this.onIncrement}>+</button>
                    </div>
                </div>
                <div className='d-flex card'> 
                   <h1>Bedroom</h1>
                 <div>
                        <button onClick={this.onDecrement}>-</button>
                        {count}
                        <button onClick={this.onIncrement}>+</button>
                    </div>
                </div>
                <div className='d-flex card'> 
                   <h1>Bathroom</h1>
                 <div>
                        <button onClick={this.onDecrement}>-</button>
                        {count}
                        <button onClick={this.onIncrement}>+</button>
                    </div>
                </div>
                <div className='d-flex card'> 
                   <h1>Dining</h1>
                 <div>
                        <button onClick={this.onDecrement}>-</button>
                        {count}
                        <button onClick={this.onIncrement}>+</button>
                    </div>

                    
                </div>

                </div>
               
                
            </div>
            
        </>
 );
    }
}
 
export default Estcounter;