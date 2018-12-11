import React, { Component } from 'react';

class ShowInputBox extends Component {
    constructor(props) {
        super(props);

        const element_to_be_toggled_id = this.props.request_type + '_div';
        const text_input_id = this.props.request_type + '_text_input';
        const author_name_input_id = this.props.request_type + '_author_name';
        const onSend = this.props.onSend;

        this.state = {
            displayVisible: false,
            element_to_be_toggled_id: element_to_be_toggled_id,
            text_input_id: text_input_id,
            author_name_input_id: author_name_input_id,
            onSend: onSend
        };
        this.toggleDisplay = this.toggleDisplay.bind(this);
        this.callOnSendWithData = this.callOnSendWithData.bind(this);
    }

    toggleDisplay() {
        const element_to_be_toggled = document.getElementById(
            this.state.element_to_be_toggled_id
        );
        if (this.state.displayVisible) {
            element_to_be_toggled.style.display = 'none';
        } else {
            element_to_be_toggled.style.display = 'block';
        }
        this.setState({
            displayVisible: !this.state.displayVisible
        });
    }

    callOnSendWithData() {
        const data = {
            input_text: document.getElementById(this.state.text_input_id).value,
            author_name: document.getElementById(
                this.state.author_name_input_id
            ).value
        };
        //hide the button again
        this.toggleDisplay();
        this.state.onSend(data);
    }

    render() {
        const {
            toggle_view_button_text,
            text_input_prepend,
            send_button_text,
            request_type
        } = this.props;

        return (
            <React.Fragment>
                <button
                    className='btn btn-warning'
                    id={request_type}
                    onClick={e => this.toggleDisplay(e)}
                >
                    {toggle_view_button_text}
                </button>
                <div
                    id={this.state.element_to_be_toggled_id}
                    style={{ display: 'none' }}
                    className='input-group'
                >
                    <div className='input-group'>
                        <div className='input-group'>
                            <div className='input-group-prepend'>
                                <span className='input-group-text'>
                                    {text_input_prepend}
                                </span>
                            </div>
                            <textarea
                                id={this.state.text_input_id}
                                required
                                minLength='20'
                                className='form-control'
                                aria-label={text_input_prepend}
                            />
                        </div>
                        <div className='input-group mb-3'>
                            <div className='input-group-prepend'>
                                <span
                                    className='input-group-text'
                                    id='basic-addon1'
                                >
                                    @
                                </span>
                            </div>
                            <input
                                id={this.state.author_name_input_id}
                                required
                                type='text'
                                className='form-control'
                                placeholder='Username'
                                aria-label='Username'
                                aria-describedby='basic-addon1'
                            />
                        </div>
                    </div>
                    <div className='input-group-append'>
                        <button
                            className='btn btn-primary'
                            onClick={this.callOnSendWithData}
                        >
                            {send_button_text}
                        </button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default ShowInputBox;
