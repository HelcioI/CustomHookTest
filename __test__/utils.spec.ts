import { isPasswordValid, isValidEmail } from "../src/utils/utils"

describe("utils tests", () => {
  it("should be able to validate a valid email", () => {
    expect(isValidEmail("john.doe@hotmail.com")).toBeTruthy()
  })

  it("should not be able to validate a invalid email", () => {
    expect(isValidEmail("john.doe")).toBeFalsy()
  })

  it("should not be able to validate a empty email", () => {
    expect(isValidEmail("")).toBeFalsy()
  })

  it("should return true if password is longer than or equal to 8 characters", () => {
    expect(isPasswordValid("12345678")).toBeTruthy()
  })

  it("should return false if password is lesser than 8 characters", () => {
    expect(isPasswordValid("1234567")).toBeFalsy()
  })
})