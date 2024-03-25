import {Text, View} from 'react-native';
import {styles} from './style';

export function CustomTabLabel({
  label,
  activeTab,
}: {
  label: string;
  activeTab: boolean;
}) {
  return (
    <View style={styles.tabLabelContainer}>
      <View
        style={[
          styles.tabCircle,
          {backgroundColor: activeTab ? 'black' : 'white'},
        ]}>
        <Text
          style={[styles.tabLabelText, {color: activeTab ? 'white' : 'black'}]}>
          {label}
        </Text>
      </View>
    </View>
  );
}
