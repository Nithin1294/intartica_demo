import React, { Component } from 'react';
import "./estcounter.css";

class Estcounter extends Component {
    state = {
        livingRoomCount: 0,
        kitchenCount: 0,
        bedroomCount: 0,
        bathroomCount: 0,
        diningCount: 0
    };

    onIncrement = (room) => {
        this.setState((prevState) => ({ [`${room}Count`]: prevState[`${room}Count`] + 1 }));
    };

    onDecrement = (room) => {
        this.setState((prevState) => ({
            [`${room}Count`]: Math.max(prevState[`${room}Count`] - 1, 0)
        }));
    };

    render() {
        const { livingRoomCount, kitchenCount, bedroomCount, bathroomCount, diningCount } = this.state;

        return (
            <div className='m-container text-center'>
                <h1>Select the rooms you’d like us to design</h1>
                <p>To know more about this, <span className='s'>click here</span></p>
                <div className='text-center'>
                    <div className='d-flex card'>
                        <div>
                            <h1>Living Room</h1>
                            <div>
                                <button onClick={() => this.onDecrement('livingRoom')}>-</button>
                                {livingRoomCount}
                                <button onClick={() => this.onIncrement('livingRoom')}>+</button>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex card'>
                        <div>
                            <h1>Kitchen</h1>
                            <div>
                                <button onClick={() => this.onDecrement('kitchen')}>-</button>
                                {kitchenCount}
                                <button onClick={() => this.onIncrement('kitchen')}>+</button>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex card'>
                        <div>
                            <h1>Bedroom</h1>
                            <div>
                                <button onClick={() => this.onDecrement('bedroom')}>-</button>
                                {bedroomCount}
                                <button onClick={() => this.onIncrement('bedroom')}>+</button>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex card'>
                        <div>
                            <h1>Bathroom</h1>
                            <div>
                                <button onClick={() => this.onDecrement('bathroom')}>-</button>
                                {bathroomCount}
                                <button onClick={() => this.onIncrement('bathroom')}>+</button>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex card'>
                        <div>
                            <h1>Dining</h1>
                            <div>
                                <button onClick={() => this.onDecrement('dining')}>-</button>
                                {diningCount}
                                <button onClick={() => this.onIncrement('dining')}>+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Estcounter;
