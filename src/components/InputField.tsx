import React, {useRef} from 'react';
import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import {colors} from '../constants';

interface InputFieldProps extends TextInputProps {
  disabled?: boolean;
  error?: string;
  touched: boolean;
}

const deviceHeight = Dimensions.get('screen').height;

const InputField = ({
  disabled = false,
  error,
  touched,
  ...props
}: InputFieldProps) => {
  const innerRef = useRef<TextInput | null>(null);
  const handlePressInput = () => {
    innerRef.current?.focus();
  };
  return (
    /* 터치 이벤트 감지하는 컴포넌트 */
    <Pressable onPress={handlePressInput}>
      <View
        style={[
          styles.container,
          disabled && styles.disabled,
          touched && Boolean(error) && styles.inputError,
        ]}>
        <TextInput
          ref={innerRef}
          editable={!disabled}
          placeholderTextColor={colors.GRAY_500}
          style={styles.input}
          autoCapitalize={'none'} /* 자동 대문자 설정 */
          spellCheck={false} /* 맞춤법 검사 기능 설정 */
          autoCorrect={false} /* 자동 수정 기능 설정  */
          {...props}
        />
        {touched && Boolean(error) && <Text style={styles.error}>{error}</Text>}{' '}
        {/* Boolean() 빈 문자열이 아니면 true, 빈 문자열이면 false */}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.GRAY_200,
    padding: deviceHeight > 700 ? 15 : 10,
  },
  input: {
    fontSize: 16,
    color: colors.BLACK,
    padding: 0,
  },
  disabled: {
    backgroundColor: colors.GRAY_200,
    color: colors.GRAY_700,
  },
  inputError: {
    borderWidth: 1,
    borderColor: colors.RED_300,
  },
  error: {
    color: colors.RED_500,
    fontSize: 12,
    paddingTop: 5,
  },
});
export default InputField;
