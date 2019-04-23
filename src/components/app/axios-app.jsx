import React,{Component} from 'react'

import Search from '../comment-axios/axios-demo/search'
import Main from '../comment-axios/axios-demo/main'

export default  class Axios_app extends Component{

    render() {
    
      return (
        <div className="container">
          <Search />
            <Main  />
        </div>
      )
    }
}