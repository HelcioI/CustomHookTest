import { View, Text } from "react-native";
import useLogin from "./useLogin";
import Button from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { ReactNode } from "react";

const LOGIN_CONSTANTS = {
  TITLE: 'DEV SYNC',
  EMAIL: 'Email',
  PASSWORDS: 'Password',
  BUTTON_LABEL: 'Button',
};

const Login = (): ReactNode => {
  const {
    styles,
    email, 
    onEmailChangeText, 
    password, 
    onPasswordChangeText, 
    handleLogin,
    showPassword,
    isDisable,
    onToggleShowPassword,
  } = useLogin();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{LOGIN_CONSTANTS.TITLE}</Text>
      <Input.Root>
        <Input.Content
          value={email}
          onChangeText={onEmailChangeText}
          placeholder={LOGIN_CONSTANTS.EMAIL}
          placeholderTextColor={'#6c6b6f'}
          keyboardType="email-address"
        />
        <Input.LeftIcon name="envelope-o" color="#6c6b6f" size={20}/>
      </Input.Root>

      <Input.Root>
        <Input.Content
          value={password}
          onChangeText={onPasswordChangeText}
          placeholder={LOGIN_CONSTANTS.PASSWORDS}
          placeholderTextColor={'#6c6b6f'}
          keyboardType="visible-password"
          secureTextEntry={!showPassword}
        />
        <Input.LeftIcon name="lock" color="#6c6b6f" size={20}/>
        <Input.RightIcon onPress={onToggleShowPassword} name="eye" color="#6c6b6f" size={20}/>
      </Input.Root>

      <Button
        label={LOGIN_CONSTANTS.BUTTON_LABEL}
        onPress={handleLogin}
        {...{isDisable}}
      />
    </View>
  )
}

export default Login;