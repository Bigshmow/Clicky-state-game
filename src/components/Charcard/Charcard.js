import React , { Component } from 'react';
import "./Style.css";



class Charcard extends Component {

    constructor(props) {
        super(props);
        this.state = {clicked: false};
    }

    componentDidMount () {
        this.handleClick()
    }

    setBack = () => {
        this.setState({clicked: false});
    }
    
    handleClick = () => {
        !this.state.clicked ? this.setState({clicked: true}) : this.setState({clicked: false});
    }

    render() {

    return (

        <div className="col-3" onClick={() => this.props.handlePoints(this.state.clicked)}>
                <img alt={this.props.name} src={this.props.image} className="img-thumbnail image" onClick={this.handleClick}/>
        </div>
    )
}
}
export default Charcard