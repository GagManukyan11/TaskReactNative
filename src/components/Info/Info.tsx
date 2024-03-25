import React from 'react';

import {Text, View} from 'react-native';

import {Subject} from './constants';
import {styles} from './styles';

function Info(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{Subject.textInfo}</Text>
    </View>
  );
}

export default Info;
