import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import {
   View,
   Text,
   KeyboardAvoidingView,
   Image,
     TouchableOpacity
 } from 'react-native';
import {
  nameChanged,
  emailChanged,
  passwordChanged,
  passwordConfirmChanged,
  signUp
} from '../actions';
import {
  Card,
  CardSection,
  Input,
  Button,
} from '../components/common';

class CreateScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return(
      {
      headerLeft: (
        <TouchableOpacity
          onPress={() => navigation.navigate('auth')}
          style={{width: 45, marginBottom: 5, marginLeft: 5}}
        >
          <Text style={{fontSize: 20, color: 'blue'}}>Back</Text>
        </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: '#E0FFFF'
      }
    }
    );
  };

  componentWillMount() {
    this.image = (<Image
        source={ require('../../assets/bowtie_Icon.jpg') }
        style={{ height:200, width: 200, borderRadius: 70, marginTop: 80 }}
      />);
  }

  onNameChange = (text) => {
    this.props.nameChanged(text);
  }

  onEmailChange = (text) => {
    this.props.emailChanged(text);
  }

  onPasswordChange = (text) => {
    this.props.passwordChanged(text);
  }

  onPasswordConfirmChange = (text) => {
    this.props.passwordConfirmChanged(text);
  }

  onSignUp () {
    const { email, password, passwordConfirm } = this.props;
    this.props.signUp({ email, password, passwordConfirm });
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

  render() {
    return (
      <View style={ styles.viewStyle }>

        <View style={{ alignItems: 'center' }}>
          { this.image }
        </View>

        <KeyboardAvoidingView style={ styles.keyboardViewContainer } behavior="padding" enabled>
          <Card>

            <CardSection>
              <Input
                placeholder="Name"
                iconName="user"
                iconType="font-awesome"
                iconColor="slategrey"
                onChangeText={ this.onNameChange.bind(this) }
                value={ this.props.name }
              />
            </CardSection>

            <CardSection>
              <Input
                placeholder="Email"
                iconName="email"
                iconType="MaterialCommunityIcons"
                iconColor="slategrey"
                onChangeText={ this.onEmailChange.bind(this) }
                value={ this.props.email }
              />
            </CardSection>

            <CardSection>
              <Input
                secureTextEntry
                placeholder="Password"
                iconName="lock"
                iconType="font-awesome"
                iconColor="slategrey"
                onChangeText={ this.onPasswordChange.bind(this) }
                value={ this.props.password }
              />
            </CardSection>

            <CardSection>
              <Input
                secureTextEntry
                placeholder="Confirm Password"
                iconName="lock"
                iconType="font-awesome"
                iconColor="slategrey"
                onChangeText={ this.onPasswordConfirmChange.bind(this) }
                value={ this.props.passwordConfirm }
              />
            </CardSection>

            {this.handleError()}

            <Button
              style={{ backgroundColor: '#e62200' }}
              onPress={ () => this.onSignUp() }
            >
              Sign Up
            </Button>

          </Card>
        </KeyboardAvoidingView>

      </View>
    );
  }
}

const styles = {
  textStyle: {
    fontSize: 30,
    color: 'blue',
    textAlign: 'center'
  },
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8ac7db'
  },
  keyboardViewContainer: {
    width: '100%',
    alignItems: 'center'
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    passwordConfirm: state.auth.passwordConfirm,
    loading: state.auth.loading,
    error: state.auth.createError,
    name: state.auth.name
  };
}

export default connect(mapStateToProps, {
  nameChanged,
  emailChanged,
  passwordChanged,
  passwordConfirmChanged,
  signUp
})(CreateScreen);
