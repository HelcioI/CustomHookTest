import { useEffect, useRef, useState } from "react";
import { createStyles } from "./styles";
import { TextInput } from "react-native";

const useLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isDisable, setIsDisable] = useState(true);
  const [inputError, setInputError] = useState({emailError: '', passwordError: ''});
  const [visible, setVisible] = useState(false);
  const styles = createStyles();

  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  useEffect(() => {
    if(isValidEmail(email) && isPasswordValid(password)){
      setIsDisable(false)
    } else {
      setIsDisable(true)
    }
  }, [email, password])

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const isPasswordValid = (password: string) => {
    return password.length >= 8;
  }

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

  const openModal = () => {
    setVisible(true);
  }
  
  const closeModal = () => {
    setVisible(false);
  }

  return {
    styles,
    email, 
    password, 
    onEmailChangeText, 
    onPasswordChangeText, 
    handleLogin, 
    isDisable, 
    showPassword,
    onToggleShowPassword,
    emailRef,
    passwordRef,
    validateInput,
    inputError,
    visible,
    closeModal,
    openModal
  }
}

export default useLogin;