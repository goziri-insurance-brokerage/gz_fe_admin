export enum LoginIdentifier {
  PhoneNumber = "PHONE_NUMBER",
  EMAIL = "EMAIL",
  ID = "ID",
  RegNumber = "REG_NUMBER",
}

export interface Login {
  password: string;
  identifier: LoginIdentifier;
  identifier_value: string;
}
