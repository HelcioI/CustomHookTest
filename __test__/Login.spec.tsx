import Login, { LOGIN_CONSTANTS } from "../src/app/Login/Login";
import {RenderAPI, fireEvent, render} from '@testing-library/react-native';

const makeSut = ({
  component: Component,
}: {component: React.FC}): RenderAPI => {
  return render(<Component/>)
}

describe('Login Test', () => {
  it('should render correctly', () => {
    const tree = makeSut({component: Login})
    expect(tree).toBeTruthy()
  })

  it('should render Title', () => {
    const {getByTestId} = makeSut({component: Login})
    const title = getByTestId("Title")
    expect(title).toHaveTextContent(LOGIN_CONSTANTS.TITLE)
  })

  it('should render email input', () => {
    const {getByTestId} = makeSut({component: Login})
    const email = getByTestId("Email")
    expect(email).toBeTruthy()
  })

  it('should render password input', () => {
    const {getByTestId} = makeSut({component: Login})
    const password = getByTestId("Password")
    expect(password).toBeTruthy()
  })

  it('should render 2 leftIcon components', () => {
    const {getAllByTestId} = makeSut({component: Login})
    const leftIcon = getAllByTestId("LeftIcon")
    expect(leftIcon.length).toBe(2)
  })

  it('should render button component', () => {
    const {getByTestId} = makeSut({component: Login})
    const button = getByTestId("Button")
    expect(button).toBeTruthy()
    expect(button).toHaveTextContent(LOGIN_CONSTANTS.BUTTON_LABEL)
  })

  it("should change the showPassword state when rightIcon is pressed", () => {
    const {queryByTestId} = makeSut({component: Login})
    const rightIcon = queryByTestId("eye")
    fireEvent.press(rightIcon)
    const rightIconAfterChange = queryByTestId("eye")
    const rightIconNewName = queryByTestId("eye-slash")
    expect(rightIconAfterChange).toBeFalsy()
    expect(rightIconNewName).toBeTruthy()
  })

  it("should be able to insert password", () => {
    const password = "12345678"
    const {getByTestId} = makeSut({component: Login})
    const component = getByTestId("Password")
    fireEvent.changeText(component, password)
    expect(component).toHaveProp("value", password)
  })

  it("should be able to insert email", () => {
    const email = "john.doe@gmail.com"
    const {getByTestId} = makeSut({component: Login})
    const component = getByTestId("Email")
    fireEvent.changeText(component, email)
    expect(component).toHaveProp("value", email)
  })
})