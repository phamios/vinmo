import {Platform} from 'react-native';

const DomainAPI = "http://localhost/vinclubws/";

export class AppConfig {
 
  // Cấu hình App 
  static AppbarHeight = Platform.OS === 'ios' ? 44 : 56;
  static StatusbarHeight = Platform.OS === 'ios' ? 20 : 0;
  static HeaderHeight = UIConstants.AppbarHeight + UIConstants.StatusbarHeight;
  
  //Cấu hình URL
  static Login = DomainAPI + "index.php/api/test";
  static UserProfile = DomainAPI + "index.php/api/getUserInfo";
  static UserTimeline = DomainAPI + "index.php/api/getStatusUser/0/20";
  static DetailsStatus = DomainAPI + "index.php/api/getDetailStatus/{id}";


  
  //Hàm mặc định 
  static RequestPost = function(url,data,output,nextScreen,stateParams){
    return fetch(url, 
        {method: "POST", 
        headers: {
            'Accept': 'application/x-www-form-urlencoded',
            'Content-Type': 'application/x-www-form-urlencoded'
            },
        body: data})
        .then(response => response.json())
        .then(async (response) => { 
            console.log("start to request POST");
            if(response.output != null){
            try {
                await AsyncStorage.setItem('vintoken',response.output);
                console.log("Get Token Successful");
            } catch (error) {
                console.log("Save Token failed");
            }
            this.props.navigator.replace(
                {screen: nextScreen,
                passProps: {
                    id: '',
                    name: '',
                    output: response.output,
                }}
            );
            } else {
            console.log("Can not get Response");
            AlertIOS.alert('Lỗi',"Lỗi xử lý đến server ");
            }
        }).done();
  }
}