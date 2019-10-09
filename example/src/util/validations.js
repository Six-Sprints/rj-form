const exp_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export function isRequired(value) {
  return value === null ||
    value === undefined ||
    ("" + value).trim().length <= 0
    ? "This field is required"
    : undefined;
}

export function isPasswordAndRequired(value) {
  return isRequired(value) || (!value ? undefined : lengthBetween(value, 8, 40));
}

function lengthBetween(value, min, max) {
  return !value || (min <= ("" + value).length && ("" + value).length <= max)
    ? undefined
    : "Password length must be greater than 8";
}

export function passwordMatchValidation(value, values) {
  if(values.password !== values.confirmPassword) {
    console.log(value);
  }

  return (
    isRequired(value) ||
    (values.password !== values.confirmPassword
      ? "Password must match"
      : undefined)
  );
}

export function isEmail(value) {
  return isRequired(value) || isValid(exp_email, value, "Please enter valid email");
}

function isValid(pattern, value = "", message) {
  return pattern.test(value) ? undefined : message;
}
