import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

constructor() {
  super();
  this.state = {
    username: null,
    id: null,
    url: null,
    avatar_url: null
  }
}

    getUser(username){
      return fetch('https://api.github.com/users/'+username)
      .then(response => response.json())
      .then(response => {
          return response;
      })
    }

    async handleSubmit(e){
      e.preventDefault();
      let user = await this.getUser(this.refs.username.value)
      this.setState({username: user.login, id: user.id, 
      url: user.url,
      avatar_url: user.avatar_url,followers:user.followers,following:user.following,html_url:user.html_url,repos_url:user.repos_url});

    }


    render(){
      let user;
    if(this.state.username) {
      user = 
      <div>
      <p>{this.state.username} <br/> {this.state.id} <br/> {this.state.url} <br/>
      <img src={this.state.avatar_url}/>
      </p></div>
    }

      return(
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo"/>
            <h1 className="App-title">Welcome to React</h1>
          </header>

          <form onSubmit={e => this.handleSubmit(e)}>
            <input ref="username" type="text" placeholder="Enter username"/>
         
          </form>
         

          <table>
            <tr>
              <th>Username</th>
              <th>UserId</th>
              <th>Followers</th>
              <th>Following</th>
              <th>profile</th>
              <th>Repo-link</th>
              <th>Image</th>
            </tr>
            <tr>
              <td>{this.state.username}</td>
              <td>{this.state.id}</td>
              <td>{this.state.followers}</td>
              <td>{this.state.following}</td>
              <td><a href={this.state.html_url} >Visit Profile</a></td>
              <td><a href={this.state.repos_url}>Github Repositories</a></td>
              <td><img src={this.state.avatar_url}  width='50' height='auto' /></td>
            </tr>
          </table>
          </div>
      );
    }
}

export default App;
