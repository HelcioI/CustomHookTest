import Login, { LoginProps } from "./Login";
import {RenderAPI, fireEvent, render} from '@testing-library/react-native';
import { LOGIN_CONSTANTS } from "./LoginWrapper";

const props: LoginProps = {
  title: LOGIN_CONSTANTS.TITLE,
  emailPlaceholder: LOGIN_CONSTANTS.EMAIL,
  passwordPlaceholder: LOGIN_CONSTANTS.PASSWORDS,
  buttonLabel: LOGIN_CONSTANTS.BUTTON_LABEL,
  email: "",
  password: "",
  showPassword: false,
  onEmailChangeText: jest.fn(),
  onPasswordChangeText: jest.fn(),
  onToggleShowPassword: jest.fn(),
  handleLogin: jest.fn(),
  isDisable: true,
  inputError: {    
    emailError: "",
    passwordError: "",
  },
  validateInput: jest.fn(),
}

const makeSut = ({
  component: Component,
  props,
}: {component: React.FC<LoginProps>, props: LoginProps}): RenderAPI => {
  return render(
    <Component {...props}/>
    )
}

describe('Login Test', () => {
  beforeEach(() => jest.clearAllMocks())

  it('should render correctly', () => {
    const tree = makeSut({component: Login, props})
    expect(tree).toBeTruthy()
  })

  it('should render Title', () => {
    const {getByTestId} = makeSut({component: Login, props})
    const title = getByTestId("Title")
    expect(title).toHaveTextContent(LOGIN_CONSTANTS.TITLE)
  })

  it('should render email input', () => {
    const {getByTestId} = makeSut({component: Login, props})
    const email = getByTestId("Email")
    expect(email).toBeTruthy()
  })

  it('should render password input', () => {
    const {getByTestId} = makeSut({component: Login, props})
    const password = getByTestId("Password")
    expect(password).toBeTruthy()
  })

  it('should render 2 leftIcon components', () => {
    const {getAllByTestId} = makeSut({component: Login, props})
    const leftIcon = getAllByTestId("LeftIcon")
    expect(leftIcon.length).toBe(2)
  })

  it('should render button component', () => {
    const {getByTestId} = makeSut({component: Login, props})
    const button = getByTestId("Button")
    expect(button).toBeTruthy()
    expect(button).toHaveTextContent(LOGIN_CONSTANTS.BUTTON_LABEL)
  })

  it("should call onToggleShowPassword when rightIcon is pressed", () => {
    const {queryByTestId} = makeSut({component: Login, props})
    const rightIcon = queryByTestId("eye")
    fireEvent.press(rightIcon)
    expect(props.onToggleShowPassword).toHaveBeenCalled()
  })

  it("should be able to call onPasswordChangeText when inserting password", () => {
    const password = "12345678"
    const {getByTestId} = makeSut({component: Login, props})
    const component = getByTestId("Password")
    fireEvent.changeText(component, password)
    expect(props.onPasswordChangeText).toHaveBeenCalledWith(password)
  })

  it("should be able to call onEmailChangeText when inserting email", () => {
    const email = "john.doe@gmail.com"
    const {getByTestId} = makeSut({component: Login, props})
    const component = getByTestId("Email")
    fireEvent.changeText(component, email)
    expect(props.onEmailChangeText).toHaveBeenCalledWith(email)
  })

  it("should not be able to call handleLogin when button is pressed when disabled", () => {
    const {getByTestId} = makeSut({component: Login, props})
    const component = getByTestId("Button")
    fireEvent.press(component)
    expect(props.handleLogin).not.toHaveBeenCalled()
  })

  it("should be able to call handleLogin when button is pressed when is not disabled", () => {
    const {getByTestId} = makeSut({component: Login, props: {...props, isDisable: false}})
    const component = getByTestId("Button")
    fireEvent.press(component)
    expect(props.handleLogin).toHaveBeenCalled()
  })

  it("should be able to call validateInput when email input gets blurred", () => {
    const {getByTestId} = makeSut({component: Login, props})
    const component = getByTestId("Email")
    fireEvent(component, 'onBlur')
    expect(props.validateInput).toHaveBeenCalled()
  })

  it("should be able to call validateInput when password input gets blurred", () => {
    const {getByTestId} = makeSut({component: Login, props})
    const component = getByTestId("Password")
    fireEvent(component, 'onBlur')
    expect(props.validateInput).toHaveBeenCalled()
  })

  it("should be able to call validateInput when email input gets submitted", () => {
    const email = 'john.doe@gmail.com'
    const {getByTestId} = makeSut({component: Login, props: {...props, email}})
    const component = getByTestId("Email")
    fireEvent(component, 'onSubmitEditing')
    expect(props.validateInput).toHaveBeenCalledWith(email, 'email', expect.any(Function))
  })

  it("should be able to call validateInput with handleLogin when password input gets submitted", () => {
    const password = '12345678'
    const {getByTestId} = makeSut({component: Login, props: {...props, password}})
    const component = getByTestId("Password")
    fireEvent(component, 'onSubmitEditing')
    expect(props.validateInput).toHaveBeenCalledWith(password, 'password', props.handleLogin)
  })

  it("should hide password when showPassword is false", () => {
    const {getByTestId} = makeSut({component: Login, props: {...props, showPassword: false, password: '12345678'}})
    const component = getByTestId("Password")
    expect(component).toHaveProp('secureTextEntry', true)
  })

  it("should show password when showPassword is true", () => {
    const {getByTestId} = makeSut({component: Login, props: {...props, showPassword: true, password: '12345678'}})
    const component = getByTestId("Password")
    expect(component).toHaveProp('secureTextEntry', false)
  })
})