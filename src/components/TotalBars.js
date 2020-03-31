import React, { Component } from 'react'
import ProgressBar from './ProgressBar';

export default class TotalBars extends Component {
    render() {
        return this.props.bars.map(bar => {
            return (
                <ProgressBar bar={bar}/>
            )
        })
    }
}

