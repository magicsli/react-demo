import React, { Component } from 'react'
// import  axios from "axios"


export default class Getkey extends Component {

    state = {
        repoName : "",
        repoUrl : ""
    }

    componentDidMount() {
        const url = "https://api.github.com/search/repositories?q=r&sort=stars"
        // axios.get(url).then(response=>{
        //         // console.log(response)
        //         const {name, html_url} = response.data.items[0];
        //         this.setState({repoName:name, repoUrl:html_url})
        // })

        fetch(url).then( response =>{
            return response.json();
        }).then( data=>{
            console.log(data)
            const {name, html_url} = data.items[0];
             this.setState({repoName:name, repoUrl:html_url})

        } )


    }
    
    
  render() {
      const {repoName,repoUrl} = this.state;
    return (
        !repoName
        ? <h2> "LOADING..."  </h2>
        : <h2>Most star repo is <a href={repoUrl}>{repoName}</a></h2> 
    )
  }
}
