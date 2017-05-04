import React, { Component } from 'react'
import Form from './core/form'

export default class NewPost extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            link: '',
            commentCount: 0,
            daysAgo: 0,
        }
    }
    render() {
        
        return (
           <Form onSubmit={() => console.log('My state: ' + JSON.stringify(this.state))} >
                <label>Title</label>
                <input onChange={(event) => this.setState({title: event.target.value})} />
                <label>Link</label>
                <input onChange={(event) => this.setState({link: event.target.value})}/>
                <label>Number of comments</label>
                <input onChange={(event) => this.setState({commentCount: event.target.value})} />
                <label>Days ago</label>
                <input onChange={(event) => this.setState({daysAgo: event.target.value})}/>
                
                <input type="submit" value="Add new Post" />
            </Form>
        )
 
    }

}