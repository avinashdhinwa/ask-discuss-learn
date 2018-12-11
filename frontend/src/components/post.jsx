import React, { Component } from 'react';
import ShowInputBox from './show-input-box';
import './post.css';
// import 'material-design-icons/iconfont/material-icons.css';

import uuidv4 from 'uuid';

class Post extends Component {
    constructor(props) {
        super(props);

        const { id, authorName, timeStamp, content } = this.props;
        this.state = {
            parentId: null,
            uuid: id,
            authorName: authorName,
            content: content,
            timeStamp: timeStamp,
            // edited: false,
            // editHistory: ["it's history"],
            replies: []
        };

        this.addReply = this.addReply.bind(this);
    }

    addReply(data) {
        const authorName = data.author_name;
        const content = data.input_text;

        const uuid = uuidv4();
        const timeStamp = Date.now();
        const parentId = this.state.uuid;
        const replies = [];

        // remember to use spread operator
        const prevReplies = [...this.state.replies];
        prevReplies.push({
            parentId,
            uuid,
            authorName,
            content,
            timeStamp,
            replies
        });
        console.log(prevReplies);

        this.setReplies(prevReplies);
    }

    setReplies(replies) {
        console.log(this);
        console.log(this.state.replies);
        this.setState({ replies });
        console.log(this.state);
        console.log(this.state.replies);
        console.log(this);
    }

    render() {
        const { authorName, timeStamp, content } = this.props;

        return (
            <div className='reply-class'>
                <div className='content'>{content}</div>
                <div className='meta-data-content'>
                    <span className='author'>
                        <span style={{ color: '#adadb1' }}>Written by:</span>
                        {authorName}
                    </span>
                    <span className='time'>
                        {new Date(timeStamp).toLocaleString()}
                    </span>
                    {/* {this.state.edited ? (
                    <span>
                        <i>Edited</i> <br />
                        History: {this.state.history}
                    </span>
                ) : (
                    ''
                )} */}
                    <span>
                        <ShowInputBox
                            toggle_view_button_text='Reply'
                            text_input_prepend="I'm saying that..."
                            send_button_text='Send'
                            request_type={'reply_for_' + this.state.uuid}
                            onSend={this.addReply}
                        />
                    </span>
                </div>
                {this.state.replies.map(reply => (
                    <Post
                        key={reply.uuid}
                        id={reply.uuid}
                        authorName={reply.authorName}
                        timeStamp={reply.timeStamp}
                        content={reply.content}
                    />
                ))}
            </div>
        );
    }
}
export default Post;
