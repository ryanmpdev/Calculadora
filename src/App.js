import React, { Component } from "react";


export default class App extends Component{

  state = {
    num1: '',
    num2: '',
    resultado: ''
  }

  divisao = () => {
    this.setState({
      resultado: this.state.num1 / this.state.num2
    })
  }

  subtracao = () => {
    this.setState({
      resultado: this.state.num1 - this.state.num2
    })
  }

  multiplicacao = () => {
    this.setState({
      resultado: this.state.num1 * this.state.num2
    })
  }

  adicao = () => {
    this.setState({
      resultado: parseInt(this.state.num1) + parseInt(this.state.num2)
    })
  }

  limpar = () => {
    this.setState({
      resultado: ""
    })
  }

handleChange1 = (event) => {
  this.setState({
    num1:event.target.value
  })
 }

 
 handleChange2 = (event) => {
  this.setState({
    num2: event.target.value
  })
}

render(){
  return(
    <calculadora>
      <title>Calculadora</title>
           <input type="number" onChange={this.handleChange1} />
           <input type="number" onChange={this.handleChange2}/>
           <butoes>
             <button onClick={this.adicao}>+</button>
             <button onClick={this.subtracao}>-</button>
             <button onClick={this.divisao}>/</button>
             <button onClick={this.multiplicacao}>*</button>
             <button onClick={this.limpar}>c</button>
           </butoes>
           <h2>{this.state.resultado}</h2>
         </calculadora>
  )
}
}
