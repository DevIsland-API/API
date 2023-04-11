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
}
