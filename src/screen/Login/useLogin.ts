import { useEffect, useState } from "react";
import { createStyles } from "./styles";

const useLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isDisable, setIsDisable] = useState(true);
  const styles = createStyles();

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

  return {
    styles,
    email, 
    password, 
    onEmailChangeText, 
    onPasswordChangeText, 
    handleLogin, 
    isDisable, 
    showPassword,
    onToggleShowPassword
  }
}

export default useLogin;