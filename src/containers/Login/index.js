// @flow
import _ from 'lodash';
import {connect} from 'react-redux';
import {View, Image, ScrollView, Platform} from 'react-native';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import Text from './../../components/Text/index';

class Login extends Component {
  static propTypes = {
    userSigninRequest: PropTypes.func.isRequired,
  };
  state = {
    errors: {},
    loading: false,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>sjh</Text>
      </View>
    );
  }
}

const mapStateToProps = () => ({});

const actions = {};

export default connect(
  mapStateToProps,
  actions,
)(Login);
