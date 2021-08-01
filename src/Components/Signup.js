import React, {useState} from 'react';

const style = {height:40,width:300, fontSize: 20}

class Signup extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            username: "",
            phoneNumber: "", 
            email: "",
            password: "",
            dateOfBirth: "",
            gender: ""
        }
    }

    handleSubmit = () => {
        const {name, username, phoneNumber, email, password, dateOfBirth,gender} = this.state
        alert(
            "name: " + name + "\n" +
            "username: " + username +"\n" +
            "phoneNumber: " + phoneNumber +"\n" +
            "email: " + email +"\n" +
            "password: " + password +"\n" +
            "Date of birth: " + dateOfBirth +"\n" +
            "Gender: " + gender +"\n"
        )
    }
 
    render() {
        return(
            <center>
                <h1 style={{color: '#000000', backgroundColor: 'rgb(255, 255, 255)'}}>Signup Page</h1>
                <br/>
                <hr/>
                <br/>
                <input type="text" placeholder="Name" style={style} id="name"
                    value={this.state.name}
                    onChange={(e) => this.setState({name : e.target.value})}/><br/><br/>
                 <input type="text" placeholder="Username" style={style} id="username" 
                    value={this.state.username}
                    onChange={(e) => this.setState({username : e.target.value})}/><br/><br/>
                 <input type="text" placeholder="Phone Number" style={style} id="phone number"
                    value={this.state.phoneNumber}
                    onChange={(e) => this.setState({phoneNumber : e.target.value})}/><br/><br/>    
                 <input type="text" placeholder="Email" style={style} id="email" 
                    value={this.state.email}
                    onChange={(e) => this.setState({email : e.target.value})}/><br/><br/>
                 <input type="password" placeholder="Password" style={style} id="password"
                    value={this.state.password}
                    onChange={(e) => this.setState({password : e.target.value})}
                 /><br/><br/>
                 <input type="date" style={{height:44,width:150, fontSize: 20}} id="date of birth" 
                    value={this.state.dateOfBirth}
                    onChange={(e) => this.setState({dateOfBirth : e.target.value})}/>
                 <select style={{height:44,width:150, fontSize: 20, color: "gray"}} id="gender" 
                    value={this.state.gender}
                    onChange={(e) => this.setState({gender : e.target.value})}>
                     <option value="" selected>Gender</option>
                     <option value="Male">Male</option>
                     <option value="female">Female</option>
                     <option value="LGBTQ">LGBTQ</option>
                     <option value="Rather Not Discuss">Rather Not Discuss</option>
                 </select><br/><br/>
                 <a style={{fontSize: 15, color: "blue"}} onClick = {this.props.action}>Already have an account? Login</a><br/><br/>
                 <input type="submit" style={{height: 35, width: 300, fontSize: 20, backgroundColor: "rgb(143, 134, 134)", color: "white"}} value="Signup" onClick={this.handleSubmit}/>
            </center>
    
        )
        }
    }


export default Signup;

