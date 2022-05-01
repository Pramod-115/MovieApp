import React from "react";

class InputFeild extends React.Component {

    state = {term: ""}

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.process(this.state.term);
    }

    render () {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input onChange={(e) => {this.setState({term: e.target.value})}} />
                {/* value={this.state.term} */}
            </form>
        )
    }
}


export default InputFeild;