import React from "react";
import { contactInfo } from "../../";

export const NameInput = ({ nameInput, setNameInput, nameValidation }) => {
  const onChangeName = (event) => {
    const newName = event.target.value;
    setNameInput((prevState) => ({ ...prevState, name: newName }));
  };
  return (
    <fieldset>
      <input
        className='"form__name"'
        type="text"
        id="name"
        value={nameInput.name}
        name="name"
        onChange={onChangeName}
        onBlur={() => nameValidation(nameInput, setNameInput)}
      />
      <label
        className={
          nameInput.name ? "form__label-name active" : "form__label-name"
        }
        htmlFor="name"
      >
        {contactInfo.inputs.name}
      </label>
      {nameInput.isDirty && (
        <div className="form__input-error">{nameInput.error}</div>
      )}
    </fieldset>
  );
};
