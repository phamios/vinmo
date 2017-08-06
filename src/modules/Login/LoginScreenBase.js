import React, {Component} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  StatusBar,
  Image,
  Text,
  AlertIOS,
  AsyncStorage
} from 'react-native';
import {UIConstants} from '../util/AppConfig';
import ThemeService from '../util/ThemeService';


class LoginScreenBase extends Component {

  constructor(props){
    super(props);
    this.state={
      username:"",
      password:"",
      result:"CHUA LOGIN",
      token:""
    }
  }
 
  

  _renderMainScreen() {
    console.log("Start Login");
    // Thực hiện request POST đến server API 
    let data = new FormData();
    data.append("username",this.state.username);
    data.append("password",this.state.password);
    
    console.log("username = " + this.state.username);
    
    fetch(UIConstants.Login, 
    {method: "POST", 
    headers: {
          'Accept': 'application/x-www-form-urlencoded',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
    body: data})
    .then(response => response.json())
       .then(async (response) => { 
             
             console.log("start check login");
            if(response._token != null){
              try {
                await AsyncStorage.setItem('vintoken',response._token);
                console.log("Get Token Successful");
              } catch (error) {
                console.log("Save Token failed");
              }
              this.props.navigator.replace(
                {screen: ThemeService.getMainScreen(),
                  passProps: {
                    id: '',
                    name: '',
                    _token: response._token,
                  }}
              );
            } else {
              console.log("Can not get Response");
              AlertIOS.alert(
                'Lỗi',
                'Tên đăng nhập hoặc mật khẩu không đúng ! '
                );
            }
        }) 
    // Kết thúc lệnh gọi request POST 
  }

}



module.exports = LoginScreenBase;
