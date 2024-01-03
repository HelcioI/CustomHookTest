import { View, Text } from "react-native";
import Button from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { ReactNode } from "react";
import { createStyles } from "./styles";
import { TextInput } from "react-native-gesture-handler";

interface LoginProps {
  email: string;
  password: string;
  title: string;
  emailPlaceholder: string;
  passwordPlaceholder: string;
  showPassword: boolean;
  onEmailChangeText: (text: string) => void;
  onPasswordChangeText: (text: string) => void;
  onToggleShowPassword: () => void;
  handleLogin: () => void;
  isDisable: boolean;
  inputError: {
    emailError: string;
    passwordError: string;
  };
  validateInput: (value: string, type: string, callback?: () => void) => void;
  emailRef: React.RefObject<TextInput>;
  buttonLabel: string;
  passwordRef: React.RefObject<TextInput>;
}

const Login = ({
  email,
  password,
  title,
  emailPlaceholder,
  passwordPlaceholder,
  showPassword,
  onEmailChangeText,
  onPasswordChangeText,
  onToggleShowPassword,
  handleLogin,
  isDisable,
  inputError,
  validateInput,
  emailRef,
  buttonLabel,
  passwordRef
}: LoginProps): ReactNode => {
  const styles = createStyles();

  return (
    <View style={styles.container}>
      <Text testID="Title" style={styles.title}>{title}</Text>
      <Input.Root>
        <Input.Content
          testID="Email"
          ref={emailRef}
          value={email}
          onChangeText={onEmailChangeText}
          placeholder={emailPlaceholder}
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
          placeholder={passwordPlaceholder}
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
        label={buttonLabel}
        onPress={handleLogin}
        {...{isDisable}}
      />
    </View>
  )
}

export default Login;