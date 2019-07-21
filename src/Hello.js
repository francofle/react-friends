import React, {Component} from 'react';

class Hello extends Component {
    render() {
        return(
            <div className='tc'>
                <h1 className='f1'>{this.props.greeting}</h1>
                <p className='f3'>Welcome to React!</p>
            </div>
        );
    };
};

export default Hello;
