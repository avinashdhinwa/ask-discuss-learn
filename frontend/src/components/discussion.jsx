import Post from './post';

import React, { Component } from 'react';

class Discussion extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        const { id, data } = this.props;
        const { authorName, timeStamp, content } = data;

        return (
            <Post
                key={id}
                id={id}
                authorName={authorName}
                timeStamp={timeStamp}
                content={content}
                replies={[]}
            />
        );
    }
}

export default Discussion;
