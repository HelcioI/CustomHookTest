import { View, Text } from "react-native";
import useLogin from "./useLogin";
import Button from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { ReactNode } from "react";
import InnerModal from "./InnerModal";
import OuterModal from "./OuterModal";
import GlobalModal from "./globalModal";

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
    openModal,
    visible,
    closeModal
  } = useLogin();

  console.log('render Login')

  return (
    <View style={styles.container}>
      <Text testID="Title" style={styles.title}>{LOGIN_CONSTANTS.TITLE}</Text>
      <Input.Root>
        <Input.Content
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
        />
        <Input.LeftIcon testID="LeftIcon" name="envelope-o" color="#6c6b6f" size={20}/>
      </Input.Root>

      <Input.Root>
        <Input.Content
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
        />
        <Input.LeftIcon testID="LeftIcon" name={"lock"} color="#6c6b6f" size={20}/>
        <Input.RightIcon 
          testID={showPassword ? "eye-slash" : "eye"} 
          iconTestID="Icon" 
          onPress={onToggleShowPassword} 
          name={showPassword ? "eye-slash" : "eye"} 
          color="#6c6b6f" 
          size={20}
        />
      </Input.Root>

      <Button
        testID="Button"
        label={LOGIN_CONSTANTS.BUTTON_LABEL}
        onPress={handleLogin}
        {...{isDisable}}
      />
      <Button onPress={openModal} label="Open OuterModal"/>
      <InnerModal>
        <Text>InnerModal</Text>
      </InnerModal>
      <GlobalModal />
      <OuterModal {...{visible, closeModal}}/>
    </View>
  )
}

export default Login;