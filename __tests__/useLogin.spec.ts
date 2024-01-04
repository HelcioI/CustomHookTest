import { act, renderHook } from "@testing-library/react-native"
import useLogin from "../src/app/Login/useLogin"

describe("useLogin Test", () => {
  it('should be disabled if email and password is empty', () => {
    const {result} = renderHook(useLogin)
    expect(result.current.isDisable).toBeTruthy()
  })

  it('should be able to validate email', () => {
    const {result} = renderHook(useLogin)
    act(() => {result.current.validateInput('test', 'email')})
    expect(result.current.inputError.emailError).toBeTruthy()
  })

  it('should be able to validate password', () => {
    const {result} = renderHook(useLogin)
    act(() => {result.current.validateInput('123', 'password')})
    expect(result.current.inputError.passwordError).toBeTruthy()
  })

  it('should be disabled if email is not validated', () => {
    const {result} = renderHook(useLogin)
    act(() => {result.current.onEmailChangeText('test')})
    act(() => {result.current.onPasswordChangeText('12345678')})
    expect(result.current.isDisable).toBeTruthy()
  })

  it('should be disabled if password is not validated', () => {
    const {result} = renderHook(useLogin)
    act(() => {result.current.onEmailChangeText('john.doe@gmail.com')})
    act(() => {result.current.onPasswordChangeText('123')})
    expect(result.current.isDisable).toBeTruthy()
  })

  it('should not be disabled if password and email passed validation', () => {
    const {result} = renderHook(useLogin)
    act(() => {result.current.onEmailChangeText('john.doe@gmail.com')})
    act(() => {result.current.onPasswordChangeText('12345678')})
    expect(result.current.isDisable).toBeFalsy()
  })

  it('should be able to toggle password visibility', () => {
    const {result} = renderHook(useLogin)
    expect(result.current.showPassword).toBeFalsy()
    act(() => {result.current.onToggleShowPassword()})
    expect(result.current.showPassword).toBeTruthy()
  })
})