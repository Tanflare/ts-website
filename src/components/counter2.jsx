import React, { Component } from 'react';
import App from '../App';
import ReactDOM from 'react-dom';


class New extends Component {
    state = {
        count: this.props.value,
        // imageUrl: 'https://picsum.photos/200'
        tags: ['tag1', 'tag2', 'tag3']
    };

    styles = {
        fontSize: 20,
        fontWeight: "bold"
    };

    renderTags()
    {
        if (this.state.tags.length === 0) return <p>No</p>;
        return <ul>
        {this.state.tags.map(tag=><li key={tag}>{tag}</li>)}
        </ul>;
    }

    handleIncrement = product =>
    {
        console.log("Incremented", product,  this)
        this.setState({ count: this.state.count + 1})
    }

    render() { 
        return ( 
        
        <React.Fragment>
        {this.props.children}
        {/* <img src = {this.state.imageUrl}></img> */}
        <span style = {this.styles} className = {this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={() => this.handleIncrement()} className= "btn btn-secondary btn-sm">Increment</button>
        {this.renderTags()}
        </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }

    Test()
    {
        ReactDOM.render(<App />, document.getElementById('root'));
    }

}

export default New;