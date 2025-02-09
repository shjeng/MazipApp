import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  PressableProps,
  Dimensions,
} from 'react-native';

/*
 * onPress를 일일이 다 적어주지 않고 PressableProps를 상속받아주면 편함.
 * */
interface CustomButtonProps extends PressableProps {
  label: string;
  variant?: 'filled' | 'outlined';
  size?: 'large' | 'medium';
  inValid?: boolean;
}

const deviceHeigh = Dimensions.get('screen').height;

const CustomButton = ({
  label,
  variant = 'filled',
  size = 'large',
  inValid = true,
  ...props // prop
}: CustomButtonProps) => {
  Dimensions.get('window').height;
  return (
    <Pressable
      disabled={inValid}
      style={[
        styles.container,
        styles[variant],
        styles[size],
        inValid && styles.inValid,
      ]}
      {...props}>
      <Text style={[styles.text, styles[`${variant}Text`]]}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 3,
    justifyContent: 'center',
  },
  inValid: {
    opacity: 0.5,
  },
  filled: {
    backgroundColor: '#C63B64',
  },
  outlined: {
    borderColor: '#C63B64',
    borderWidth: 1,
  },
  large: {
    width: '100%',
    paddingVertical: deviceHeigh > 700 ? 15 : 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  medium: {
    width: '50%',
    paddingVertical: deviceHeigh > 700 ? 12 : 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
  },

  filledText: {
    color: 'white',
  },
  outlinedText: {},
});

/* paadingVertical: 상하 패딩, 기본 px 단위*/

export default CustomButton;
