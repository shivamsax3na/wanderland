import React, { Component } from 'react'

export default class Instagram extends Component {
    render() {


        
        const {
            getStories,
            getStoriesFeed,
            getMediaByCode,
            getUserByUsername
        } = require('instagram-stories')

        getUserByUsername({ username: '__shivamsaxena__', userid: 1436900219981161, sessionid: '' }).then(({ user }) => {
            console.log(user.id)
          })

        return (
            <div>
                
            </div>
        )
    }
}


