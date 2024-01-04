import { View, Text, TouchableOpacity } from "react-native";
import useLogin from "./useLogin";
import Button from "../../components/Button/Button";
import  Input  from "../../components/Input/Input";
import { ReactNode } from "react";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export const LOGIN_CONSTANTS = {
  TITLE: 'DEV SYNC',
  EMAIL: 'Email',
  PASSWORDS: 'Password',
  BUTTON_LABEL: 'Button',
  TEST: 'TEST REF'
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
    emailRef,
    passwordRef,
    validateInput,
    inputError,
  } = useLogin();

  return (
    <View style={styles.container}>
      <Text testID="Title" style={styles.title}>{LOGIN_CONSTANTS.TITLE}</Text>
        <Input
          testID="Email"
          ref={emailRef}
          value={email}
          onChangeText={onEmailChangeText}
          placeholder={LOGIN_CONSTANTS.EMAIL}
          placeholderTextColor={'#6c6b6f'}
          error={inputError.emailError}
          keyboardType="email-address"
          returnKeyLabel="next"
          returnKeyType="next"
          validate={()=> validateInput(email, 'email')}
          onSubmitEditing={()=> validateInput(email, 'email', () => passwordRef.current?.focus())}
          leftIcon={
            <View style={styles.leftIcon}>
              <FontAwesome
                testID="LeftIcon" 
                name="envelope-o" 
                color="#6c6b6f" 
                size={20}
              />
            </View>
          }
        />

        <Input
          testID="Password"
          ref={passwordRef}
          value={password}
          onChangeText={onPasswordChangeText} 
          placeholder={LOGIN_CONSTANTS.PASSWORDS}
          placeholderTextColor={'#6c6b6f'}
          error={inputError.passwordError}
          keyboardType="visible-password"
          secureTextEntry={!showPassword}
          validate={() => validateInput(password, 'password')}
          onSubmitEditing={() => validateInput(password, 'password', handleLogin)}
          leftIcon={
            <View style={styles.leftIcon}>
              <FontAwesome
                testID="LeftIcon" 
                name="lock" 
                color="#6c6b6f" 
                size={20}
              />
            </View>
          }
          rightIcon={   
            <TouchableOpacity onPress={onToggleShowPassword} style={styles.rightIcon}>
              <FontAwesome   
                testID={showPassword ? "eye-slash" : "eye"} 
                name={showPassword ? "eye-slash" : "eye"} 
                color="#6c6b6f" 
                size={20}
              />
            </TouchableOpacity>
          }
        />

      <Button
        testID="Button"
        label={LOGIN_CONSTANTS.BUTTON_LABEL}
        onPress={handleLogin}
        {...{isDisable}}
      />
    </View>
  )
}

export default Login;