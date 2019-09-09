import React from 'react';
import logo from './logo.svg';
import "./App.css";

class App extends React.Component{

  // Create a constructor\
  constructor(props){
    super(props);
    this.state = {
      newItem: "",
      list : [] //New Item is stored here
    }
  }

  addItem(todoValue){
    if(todoValue !== ""){
        const newItem = {
          id: Date.now(),
          value: todoValue,
          isDone: false
        };
        const list = [...this.state.list];
        list.push(newItem);

        this.setState({
          list,
          newItem: ""
        })
    }
  }

  deleteItem(id){
    //Get the lis first
    const list = [...this.state.list];
    const updatedlist = list.filter(item => item.id !== id);
    //Updat the state
    this.setState({list: updatedlist})
  }

  updateInput(input){
    this.setState({newItem:input});
  }


  render(){
    return(
      <div>
        <img src={logo} width="400" heigh="400" className="logo"/>
        <h1 className="app-title">Todo App</h1>
        <div className="container">
            Add an item.... 
            <br />
            <input type="text" className="input-text" placehoder="Write a todo" 
            required value={this.state.newItem} onChange={e=> this.updateInput(e.target.value)}/>
            <button className="add-btn" onClick={()=> this.addItem(this.state.newItem)}>to do</button>
            <div className="list">
              <ul>
                {this.state.list.map(item =>{
                  return(
                    <li key={item.id}>
                      <input type="checkbox"
                      name="idDone"
                      checked={item.isDone}
                      onChnage={()=>{}} />
                      {item.value}
                      <button className="btn"
                      onClick={ ()=> this.deleteItem(item.id)}>Delete</button>
                    </li>
                  )
                })}
                <li>
                  <input type="checkbox" name="" id="" />
                    Recording to do
                  <button className="add-btn" onClick={ ()=> this.addItem(this.state.newItem)}
                    disabled={!this.state.newItem.length}>To do </button>
                </li>
              </ul>
            </div>

          </div>
      </div>
    )
  }
}


{/* // function App(){
//   return(
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" /> 
//         <p>Practice react with Sarfaraz</p>
//       </header>
//     </div>
//   );
// } */}


export default App;