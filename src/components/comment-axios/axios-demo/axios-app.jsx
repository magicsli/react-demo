import React,{Component} from 'react'

import Search from './search'
import Main from './main'

export default  class Axios_app extends Component{

  state = {
    keyWord:""
  }

 getData = (keyWord)=>{
      this.setState({keyWord})
 }

    render() {
      let {keyWord} = this.state
      return (
        <div className="container">
          <Search getData={this.getData}/>
            <Main keyWord={keyWord} />
        </div>
      )
    }
}