import React,{Component} from "react";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstnum: 0,
      secondnum: 0,
    }
  }
  updateInputValue = e => {
    const { name, value } = e.target;
    this.setState({[name]: parseInt(value)});
  };
  add = () => { 
    const { firstnum, secondnum } = this.state;
    alert("The sum of the numbers is " + (firstnum + secondnum));
  };
  substract = () => {
    const { firstnum, secondnum } = this.state;
    alert("The difference of the numbers is " + (firstnum - secondnum));
  };
  multiply = () => {
    const { firstnum, secondnum } = this.state;
    alert("The product of the numbers is " + (firstnum * secondnum));
  };
  divide = () => {
    const { firstnum, secondnum } = this.state;
    alert("The qoutient of the numbers is " + (firstnum / secondnum));
  };
  exponent = () => {
    const { firstnum, secondnum } = this.state;
    alert("The square of the numbers is " + (firstnum ** secondnum));
  };
  
  render() {
    return (
      <div>
        <h1>Simple Calculator</h1>
        <input placeholder="first value" value={this.state.inputValue} name="firstnum" onChange={e => this.updateInputValue(e)}/><br></br>
        <input placeholder="second value" value={this.state.inputValue} name="secondnum" onChange={e => this.updateInputValue(e)}/>
        <button onClick={this.add}>Add</button>
        <button onClick={this.substract}>Subtract</button>
        <button onClick={this.multiply}>Multiply</button>
        <button onClick={this.divide}>Divide</button>
        <button onClick = {this.exponent}>Square</button><br></br>
      </div>
    );
  }
}
export default App;