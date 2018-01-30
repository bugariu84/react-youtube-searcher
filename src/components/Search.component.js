import React, { Component } from "react";

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({term: event.target.value});
    }

    render() {
        return (
            <div className="form-group">
                <input className="form-control" type="text" placeholder="Search" value={this.state.term} onChange={this.handleChange}/>
                <span className="badge badge-secondary">{this.state.term ? "Searching for: " + this.state.term : ''}</span>
            </div>
        );
    }
}

export default Search;