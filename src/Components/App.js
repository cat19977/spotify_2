import {React, Component} from 'react';
import './../Styling/App.css';
import SpotifyLogin from 'react-spotify-login';
import { clientId, redirectUri, scope } from './../Configs/settings.js';
import Home from './Home'

const LoginComponent=({onSuccess})=> {
  const onFailure = response => console.error(response);
  return(
    <SpotifyLogin clientId={clientId}
    redirectUri={redirectUri}
    scope={scope}
    onSuccess={onSuccess}
    onFailure={onFailure}/>)
}

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        token: false,
      };
      this.onSuccess = this.onSuccess.bind(this);
    }
    onSuccess = response => {
      console.log(response);
      this.setState({token: true})
      localStorage.setItem('token', response['access_token']);
    }
  
  render(){
  return (
    <div className='App'>
        {this.state.token ?
            <Home token={this.state.token}/> :
            <LoginComponent onSuccess={this.onSuccess}/>
        }
      </div>
  )
}

}
export default App
