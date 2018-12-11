import NavBar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.css';

import React, { Component } from 'react';
import Discussions from './components/discussions';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <div className='container' style={{ marginTop: '2vh' }}>
                    <Discussions />
                </div>
            </React.Fragment>
        );
    }
}

export default App;
