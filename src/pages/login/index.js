import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  LoginWrapper,
  LoginBox,
  Input,
  Button
} from './style';
import { actionCreators } from './store';

class Login extends PureComponent {

  constructor(props) {
    super(props);
    this.account = React.createRef();
    this.password = React.createRef();
  }
  render() {
    const { loginStatus } = this.props;
    if(loginStatus){
      return <Redirect to='/' />
    }else {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder='账号' type='text' ref={this.account} />
            <Input placeholder='密码' type='password' ref={this.password} />
            <Button 
              onClick={() => this.props.login(this.account, this.password)}
            >
              登录
            </Button>
          </LoginBox>
        </LoginWrapper>
      )
    }
  }
}

const mapStateToProps = state => ({
  loginStatus: state.getIn(['login', 'login'])
});

const mapDispatchToProps = dispatch => ({
  login(accountElem, passwordElem) {
    const account = accountElem.current.value;
    const password = passwordElem.current.value;
    dispatch(actionCreators.login(account, password)); 
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);