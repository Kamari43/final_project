export const USER_REGEX = new RegExp( /^\[A-z\][A-z0-9-_]{3,23}$/);
export const PWD_REGEX = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/);