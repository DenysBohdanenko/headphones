import React from "react";
import { contactInfo } from "../../";

export const TextArea = ({
  messageInput,
  setMessageInput,
  messageValidation,
}) => {
  const onChangeMessage = (event) => {
    const newMessage = event.target.value;
    setMessageInput((prevState) => ({ ...prevState, message: newMessage }));
  };
  return (
    <fieldset>
      <textarea
        className="form__message"
        id="textarea"
        name="message"
        value={messageInput.message}
        onBlur={() => messageValidation(messageInput, setMessageInput)}
        onChange={onChangeMessage}
      ></textarea>
      <label
        htmlFor="textarea"
        className={messageInput.message ? "active" : ""}
      >
        {contactInfo.inputs.message}
      </label>
      {messageInput.isDirty && (
        <div className="form__input-error">{messageInput.error}</div>
      )}
    </fieldset>
  );
};
