import React, { Component } from 'react'


export default class App extends Component {
  state={ 
    fullName :'aida',
    bio :'kelibia',
    imageSrc :'/Fleurs-et-couleurs.jpg',
    
   profession :'ingenieur',
   Booleanshows :false,
   count :0

  }
  handleClick=e=>{
    e.preventDefault();
    this.setState({...this.state,
      show:!this.state.show});
    console.log (this.state.show);
    }


  Increment = ()=>{
    this.setState(
      {...this.state,count:this.state.count+1}
    )
  }
  componentDidMount(){
    setInterval(this.Increment,1000)
  }

  
  
  render() {
    return (
      

      <div>
        <button onClick={this.handleClick}>
            Click to Booleanshows
          </button>
          {this.state.show===true &&<div>
         
<h1>  {this.state.bio }</h1>

<h1> {this.state.fullName }</h1>
 <img src={this.state.imageSrc} alt="photo"></img> 
<h1> {this.state.profession }</h1>


  <p>count : {this.state.count}</p>
          </div>}
   


          
      </div>
          
    )
  }
}


