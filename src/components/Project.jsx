import React, { Component } from 'react';
import './project.css';
class Project extends Component {
    state = {  } 
    render() { 
        return (
            <div className='project-bg'>
                <div className='project-card pt-5'>
                    <div className='project-card1'>
                        <h1 className='project-card1-p'>Subscribe To Our Email</h1>
                    </div>
                    <h1 className='project-card-h1'>Start Project With Us ?</h1>
                    <p className='project-card-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <button className='project-card-button'>Start New</button>

                </div>
            </div>
        );
    }
}
 
export default Project;