import { ReactNode, useEffect, useRef, useState } from "react";
import Login from "./Login";
import { TextInput } from "react-native-gesture-handler";
import { isPasswordValid, isValidEmail } from "../../utils";

export const LOGIN_CONSTANTS = {
  TITLE: 'DEV SYNC',
  EMAIL: 'Email',
  PASSWORDS: 'Password',
  BUTTON_LABEL: 'Button',
  TEST: 'TEST REF'
};

const LoginWrapper= (): ReactNode => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isDisable, setIsDisable] = useState(true);
  const [inputError, setInputError] = useState({emailError: '', passwordError: ''});
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  useEffect(() => {
    if(isValidEmail(email) && isPasswordValid(password)){
      setIsDisable(false)
    } else {
      setIsDisable(true)
    }
  }, [email, password])

  const validateInput = (text: string, type: "email" | "password", callback?: () => void) => {
    if(type === 'email') {
      if(isValidEmail(text)) {
        setInputError({emailError: '', passwordError: ''});
        callback?.();
      } else {
        setInputError(state => ({...state, emailError: 'Invalid email'}));
      }
    }
    if(type === 'password') {
      if(isPasswordValid(text)) {
        setInputError({emailError: '', passwordError: ''});
        callback?.();
      } else {
        setInputError(state => ({...state, passwordError:'Password must be at least 8 characters'}));
      }
    }
  }

  const handleLogin = () => {
    console.log({email, password})
  }

  const onEmailChangeText = (text: string) => {
    setEmail(text)
  }

  const onToggleShowPassword = () => {
    setShowPassword(state => !state)
  }

  const onPasswordChangeText = (text: string) => {
    setPassword(text)
  }

  return (
    <Login 
    title={LOGIN_CONSTANTS.TITLE}
    emailPlaceholder={LOGIN_CONSTANTS.EMAIL}
    passwordPlaceholder={LOGIN_CONSTANTS.PASSWORDS}
    buttonLabel={LOGIN_CONSTANTS.BUTTON_LABEL}
    {...{
      email,
      password,
      showPassword,
      onEmailChangeText,
      onPasswordChangeText,
      onToggleShowPassword,
      handleLogin,
      isDisable,
      inputError,
      validateInput,
      emailRef,
      passwordRef
    }}/>
  )
}

export default LoginWrapper;