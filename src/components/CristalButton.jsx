import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

export default function MagicButton(props) {
  const { onPress, title, color } = props;
  return (
    <Pressable 
        style={styles.button} 
        onPress={onPress}>
        <Text style={ {fontSize: 30, lineHeight: 21, fontWeight: 'bold', letterSpacing: 0.25,
                        color: color,}}>
            {title}
        </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: 'rgba(255,255,255,0.5)'
  },
  // text: {
  //   fontSize: 30,
  //   lineHeight: 21,
  //   fontWeight: 'bold',
  //   letterSpacing: 0.25,
  //   color: 'white',
  // },
});