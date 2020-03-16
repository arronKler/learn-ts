namespace Validation {
  export interface StringValidator {
    isAcceptable(s: string): boolean;
  }

  const lettersRegexp = /^[A-za-z]+$/;
}

let validator: Validation.StringValidator = {
  isAcceptable(s: string) {
    return true;
  }
};
