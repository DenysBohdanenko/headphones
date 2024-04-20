const errors = {
  empty: "This field is empty",
  incorrect: "Email is not correct!",
};

const nameValidation = (nameInput, setNameInput) => {
  if (nameInput.name.length < 1) {
    setNameInput((prevState) => ({
      ...prevState,
      isDirty: true,
      error: errors.empty,
    }));
  } else {
    setNameInput((prevState) => ({
      ...prevState,
      isDirty: false,
      isValid: true,
    }));
  }
};

const emailValidation = (event, emailInput, setEmailInput) => {
  const x =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (emailInput.email.length < 1) {
    setEmailInput((prevState) => ({
      ...prevState,
      error: errors.empty,
      isDirty: true,
    }));
  } else if (!x.test(String(event.target.value).toLowerCase())) {
    setEmailInput((prevState) => ({
      ...prevState,
      error: errors.incorrect,
      isDirty: true,
    }));
  } else {
    setEmailInput((prevState) => ({ ...prevState, isDirty: false }));
  }
};

const messageValidation = (messageInput, setMessageInput) => {
  if (messageInput.message.length < 1) {
    setMessageInput((prevState) => ({
      ...prevState,
      isDirty: true,
      error: errors.empty,
    }));
  } else {
    setMessageInput((prevState) => ({
      ...prevState,
      isDirty: false,
      isValid: true,
    }));
  }
};

export { nameValidation, emailValidation, messageValidation, errors };
