import React, { Component } from 'react'

class ProgressBar extends Component {
    
    render() {
        const { title, value } = this.props.bar;
        return (
            <div className='box'>
                <h3 className='title'>{title}</h3>    
                <div className='progress-bar'>
                    <span style={{width:`${value}%`}} className='progress'></span>
                </div>
            </div>
        )
    }

}



export default ProgressBar;




