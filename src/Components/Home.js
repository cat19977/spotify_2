import {initiateGetTopResult} from './Api.js'
import {React, Component} from 'react'
import Dashboard from './Dashboard'

class Home extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoaded: false,
      };
}
  
getInitialData = async () =>{
    var p = []
    const func_list = ['artists_short', 'artists_medium', 'artists_long','tracks_short','tracks_medium','tracks_long']
    for(var i in func_list){
        var term = func_list[i].split('_')[1];
        var type = func_list[i].split('_')[0];
        p.push(initiateGetTopResult(term, type))
    }
    
        Promise.all(p).then(
            console.log('done')
        )
   }
    
  componentDidMount(){
        this.getInitialData().then(
            this.setState({isLoaded: true})
        )
    }
    
    render(){
    return(
        <div className = 'Home'>
            {this.state.isLoaded?
             <Dashboard/>:
            <p>Loading...</p>
            }
        </div>
    )
  }
}
  
  export default Home