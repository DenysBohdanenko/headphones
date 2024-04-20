import React from "react";
import { contactInfo } from "../../";

export const EmailInput = ({ emailInput, setEmailInput, emailValidation }) => {
  const onChangeEmail = (event) => {
    const newEmail = event.target.value;
    setEmailInput((prevState) => ({ ...prevState, email: newEmail }));
  };
  return (
    <fieldset>
      <input
        className="form__email"
        type="email"
        name="email"
        id="email"
        value={emailInput.email}
        onChange={onChangeEmail}
        onBlur={(event) => emailValidation(event, emailInput, setEmailInput)}
      />
      <label
        className={
          emailInput.email ? "form__label-email active" : "form__label-email"
        }
        htmlFor="email"
      >
        {contactInfo.inputs.email}
      </label>
      {emailInput.isDirty && (
        <div className="form__input-error">{emailInput.error}</div>
      )}
    </fieldset>
  );
};
