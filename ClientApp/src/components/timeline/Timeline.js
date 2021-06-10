import React, {Component} from 'react';
import './Timeline.css';

export class Timeline extends Component {

    constructor(props) {
        super(props)
        this.state = {
            startYear: props.startYear ?? 2000,
            endYear: props.startYear ?? 2010,
            children: props.children
        }
    }

    render() {
        return (
            <div className="timeline_container">
                <div className="start_year">{this.state.startYear}</div>
                <div className="end_year">{this.state.endYear}</div>
                {this.state.children}
            </div>
        );
    }
}