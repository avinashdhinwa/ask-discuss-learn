import React, { Component } from 'react';

import Discussion from './discussion';
import ShowInputBox from './show-input-box';

import uuidv4 from 'uuid';

class Discussions extends Component {
    constructor(props) {
        super(props);

        this.state = {
            discussions: []
        };

        this.addNewDiscussion = this.addNewDiscussion.bind(this);
    }

    addNewDiscussion(data) {
        const discussions = this.state.discussions;

        const authorName = data.author_name;
        const content = data.input_text;

        const uuid = uuidv4();
        const timeStamp = Date.now();

        const discussion = { uuid, authorName, timeStamp, content };
        discussions.push(discussion);
        this.setState({ discussions });
    }

    render() {
        return (
            <div>
                <ShowInputBox
                    toggle_view_button_text='Have a Question??'
                    text_input_prepend='My question is:'
                    send_button_text='Ask it!!'
                    request_type='create_new_question'
                    // request_type={'create_new_question_for_' + this.state.uuid}
                    onSend={this.addNewDiscussion}
                />
                {this.state.discussions.map(discussion => (
                    <React.Fragment>
                        <Discussion
                            key={discussion.uuid}
                            id={discussion.uuid}
                            data={discussion}
                        />
                        <hr />
                    </React.Fragment>
                ))}
            </div>
        );
    }
}

export default Discussions;
