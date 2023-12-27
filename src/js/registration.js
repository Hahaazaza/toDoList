function validateForm() {
  var requiredFields = [,
    "username",
    "email",
    "password",
  ];
  for (var i = 0; i < requiredFields.length; i++) {
    var fieldName = requiredFields[i];
    var fieldValue = document.getElementsByName(fieldName)[0].value.trim();
    var errorMessageId = fieldName + "-error";
    var errorMessageElement = document.getElementById(errorMessageId);
    if (fieldName === "username" && !validateUsername(fieldValue)) {
      errorMessageElement.innerText =
        "Логин должен содержать только английские буквы";
      isValid = false;
    }
    if (fieldName === "email" && !validateEmail(fieldValue)) {
      errorMessageElement.innerText = "Введите правильную электронную почту";
      isValid = false;
    }
    if (fieldName === "password" && fieldValue.length < 10) {
      errorMessageElement.innerText =
        "Пароль должен содержать не менее 10 символов";
      isValid = false;
    }
    if (isValid) {
      document.getElementById("success-message").innerText =
        "Регистрация выполнена";
    } else {
      document.getElementById("success-message").innerText = "Ошибка при регистрации";
    }
    return isValid;
}
}

function validateEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateUsername(username) {
  var usernameRegex = /^[a-zA-Z]+$/;
  return usernameRegex.test(username);
}