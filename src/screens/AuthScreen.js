import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  Image,
  View,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native';
import {
  emailChanged,
  passwordChanged,
  signIn,
  signInWithFacebook
} from '../actions';
import {
   Card,
   CardSection,
   Input,
   Button,
   Spinner
 } from '../components/common';
import { Icon } from 'react-native-elements';

class AuthScreen extends Component {
  static navigationOptions = {
    header: null,
    tabBarVisible: false
  }

  componentWillMount() {
    this.image = (<Image
        source={ require('../../assets/bowtie_Icon.jpg') }
        style={{ height:200, width: 200, borderRadius: 70, marginTop: 80 }}
      />);
  }

  handleEmail(text) {
    this.props.emailChanged(text);
  }

  handlePassword(text) {
    this.props.passwordChanged(text);
  }

  handleLoginButton() {
    const { email, password } = this.props;
    this.props.signIn({ email, password });
  }

  handleSpinner = () => {
    if (this.props.loading) {
      return <Spinner />;
    }
  }

  handleError() {
    if (this.props.error !== '') {
      return (
        <View style={{ alignItems: 'center', marginTop: 5 }}>
          <Text style={{ color: 'red' }}>{ this.props.error }</Text>
        </View>
      );
    }
  }

  handleFacebookButton() {
    this.props.signInWithFacebook();
  }

  render() {
    return (
      <View style={ styles.containerStyle }>
          <KeyboardAvoidingView style={ styles.keyboardViewContainer } behavior="padding" enabled>

            <View style={{alignItems: 'center'}}>
              { this.image }
            </View>

            <View>
              { this.handleSpinner() }
            </View>

            <Card>

              <CardSection>
                <Input
                  iconName="user"
                  iconType="font-awesome"
                  iconColor="slategrey"
                  placeholder="Email"
                  onChangeText = { this.handleEmail.bind(this) }
                  value={ this.props.email }
                />
              </CardSection>

              <CardSection>
                <Input
                  secureTextEntry
                  iconName="lock"
                  iconType="font-awesome"
                  iconColor="slategrey"
                  placeholder="Password"
                  onChangeText={ this.handlePassword.bind(this) }
                  value={ this.props.password }
                />
              </CardSection>

              {this.handleError()}

              <Text style={ styles.passwordRecoveryStyle }>Forgot your password?</Text>

              <Button style={{ backgroundColor: '#e62200' }} onPress={() => this.handleLoginButton()}>
                Sign In
              </Button>

              <Text style={{ paddingTop: 10, textAlign: 'center'}}>OR</Text>

              <Button style={{ backgroundColor: '#3B5998' }} onPress={() => this.handleFacebookButton()}>
                Login With Facebook
              </Button>

              <View style={ styles.signUpViewStyle }>
                <Text>Dont have an account? </Text>
                <Text
                  style={{ color: 'blue',textDecorationLine: 'underline' }}
                  onPress={ () => this.props.navigation.navigate('create') }
                >
                  Sign Up
                </Text>
              </View>

            </Card>

          </KeyboardAvoidingView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    user: state.auth.user,
    error: state.auth.error,
    loading: state.auth.loading
  };
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8ac7db'
  },
  keyboardViewContainer: {
    width: '100%',
    alignItems: 'center'
  },
  facebookButton: {
    width: '100%',
    height: 48,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333333'
  },
  facebookButtonText: {
    fontSize: 20,
    color: '#fff'
  },
  space: {
    height: 17
  },
  passwordRecoveryStyle: {
    marginTop: 10,
    textAlign: 'right',
    marginRight: 10,
    color: 'blue',
    textDecorationLine: 'underline'
  },
  signUpViewStyle: {
    alignItems: 'center',
    marginLeft: 60,
    paddingTop: 25,
    paddingBottom: 5,
    flexDirection: 'row'
  }
});

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  signIn,
  signInWithFacebook
})(AuthScreen);
