import React, { useState, useEffect } from "react";
import { Success } from "../../";
import { Button } from "../../common";
import {
  NameInput,
  EmailInput,
  TextArea,
  nameValidation,
  emailValidation,
  messageValidation,
  contactInfo,
} from "../";
import "./form.scss";

export const Form = () => {
  const [nameInput, setNameInput] = useState({
    name: "",
    isDirty: false,
    isValid: false,
    error: "",
  });
  const [emailInput, setEmailInput] = useState({
    email: "",
    isDirty: false,
    isValid: false,
    error: "",
  });
  const [messageInput, setMessageInput] = useState({
    message: "",
    isDirty: false,
    isValid: false,
    error: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (
      nameInput.name.length < 1 ||
      emailInput.email.length < 1 ||
      messageInput.message.length < 1
    ) {
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
    }
  }, [emailInput, nameInput, messageInput]);

  const resetStates = () => {
    setNameInput({
      name: "",
      isDirty: false,
      isValid: false,
      error: "",
    });
    setEmailInput({
      name: "",
      isDirty: false,
      isValid: false,
      error: "",
    });
    setMessageInput({
      name: "",
      isDirty: false,
      isValid: false,
      error: "",
    });
    setIsFormValid(false);
    setIsSubmitted(false);
  };

  const formChecking = (event) => {
    nameValidation(nameInput, setNameInput);
    emailValidation(event, emailInput, setEmailInput);
    messageValidation(messageInput, setMessageInput);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    formChecking(event);
    if (isFormValid) {
      setIsSubmitted(!isSubmitted);
      setTimeout(() => resetStates(), 5000);
    }
  };

  if (isSubmitted) return <Success />;
  return (
    <form className="form" onSubmit={handleSubmit}>
      <NameInput
        nameInput={nameInput}
        setNameInput={setNameInput}
        nameValidation={nameValidation}
      />
      <EmailInput
        emailInput={emailInput}
        setEmailInput={setEmailInput}
        emailValidation={emailValidation}
      />
      <TextArea
        messageInput={messageInput}
        setMessageInput={setMessageInput}
        messageValidation={messageValidation}
      />
      <Button type="submit" className="form__button button">
        {contactInfo.button}
      </Button>
    </form>
  );
};
