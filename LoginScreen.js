//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
  LayoutAnimation,
  Image,
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      secureTextEntry: true,
    };
  }
  secureTextEntry = () => {
    if (this.state.secureTextEntry) {
      this.setState({
        secureTextEntry: false,
      });
    } else {
      this.setState({
        secureTextEntry: true,
      });
    }
  };

  handleLogin = () => {
    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>{/* <Logo /> */}</View>
        <View style={styles.errorMessage}>
          <Text style={styles.error}></Text>
        </View>

        <View style={styles.emailAndPassword}>
          <TextInput
            placeholder="Email"
            autoCorrect={false}
            style={styles.input}
            value={this.state.email}
            onChangeText={(email) => this.setState({email})}
          />

          <View
            style={{
              flexDirection: 'row',
              height: 40,
              backgroundColor: 'rgb(255,255,245)',
              paddingLeft: 10,
              marginBottom: 15,
              borderRadius: 8,
              borderWidth: 1.0,
              fontSize: 15,
              borderColor: '#FF8C00',
            }}>
            <View style={{flex: 8}}>
              <TextInput
                // style={styles.input}
                placeholder="Password"
                secureTextEntry={this.state.secureTextEntry}
                value={this.state.password}
                onChangeText={(password) => this.setState({password})}
              />
            </View>

            <View style={{flex: 1}}>
              <TouchableOpacity onPress={this.secureTextEntry}>
                {this.state.secureTextEntry ? (
                  <Feather
                    style={{marginTop: 8}}
                    name="eye-off"
                    color="gray"
                    size={20}
                  />
                ) : (
                  <Feather
                    style={{marginTop: 8}}
                    name="eye"
                    color="gray"
                    size={20}
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => alert('Not Functional')}
            style={styles.forget}>
            <Text style={{color: '#FF8C00', fontWeight: 'bold'}}>
              Forgot Password ?
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={this.handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emailAndPassword: {
    flex: 2,
  },
  input: {
    height: 40,
    backgroundColor: 'rgb(255,255,245)',
    paddingLeft: 10,
    marginBottom: 15,
    borderRadius: 8,
    borderWidth: 1.0,
    fontSize: 15,
    borderColor: '#FF8C00',
  },
  // eye: {
  //     paddingLeft: 275,
  // },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  buttonContainer: {
    backgroundColor: '#3B3B98',
    padding: 6,
    borderRadius: 10,
  },
  errorMessage: {
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  error: {
    color: '#E9446A',
    fontSize: 'bold',
    fontSize: 13,
    textAlign: 'center',
  },
  forget: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
});

export default LoginScreen;
