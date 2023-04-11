import validator from "validator";
import { UserException } from "../exceptions/UserException";

export class UserValidation {
  static isPasswordsEqual(password: string, passwordConfirmation: string) {
    if (password !== passwordConfirmation) {
      throw new UserException(
        UserException.PASSWORD_PASSWORD_CONFIRMATION_DONT_MATCH,
        401
      );
    }
  }

  static isEmailValid(email: string) {
    const isValid = validator.isEmail(email);
    if (!isValid) {
      throw new UserException(UserException.INVALID_EMAIL, 401);
    }
  }
}
