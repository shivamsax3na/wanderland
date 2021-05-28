import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'

export default class Facebook extends Component {
    

    state ={
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: '',
        // user_photos:'',
    }
    
    responseFacebook = response => {
        // console.log(response)

        this.setState({
            isLoggedIn : true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url,
            user_photos: response.user_photos
        })


    }


    componentClicked = () => console.log("clicked")
    
    
    
    render() {

        let fbContent;
        if(this.state.isLoggedIn){
            fbContent = (
                <div
                    style={{
                        width: '400px',
                        margin: 'auto',
                        background:'#f4f4f4',
                        padding: '20px'
                    }}>
                    <img src={this.state.picture} alt={this.state.nname} />
                    <h1>Welcome { this.state.name } </h1>
                    <span><i>Email: <code>{this.state.email}</code></i></span>
                </div>
            );
        }else{
            fbContent = (
                <FacebookLogin
                appId="1436900219981161"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />
            )

        }
        

        return (
            <div>
                <span>
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <center>{fbContent}</center>
                </span>
                
            </div>
        )
    }
}
