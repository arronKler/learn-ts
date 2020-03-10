export interface StringValidator {
  isAcceptable(s: string): boolean;
}

export const numberRegexp = /^[0-9]+$/;

export { StringValidator as mainValidator };

export default StringValidator;
