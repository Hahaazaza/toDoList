function validateForm() {
  var requiredFields = ["email", "password"];
  var isValid = true;

  for (var i = 0; i < requiredFields.length; i++) {
    var fieldName = requiredFields[i];
    var fieldValue = document.getElementsByName(fieldName)[0].value.trim();
    var errorMessageId = fieldName + "-error";
    var errorMessageElement = document.getElementById(errorMessageId);

    if (fieldValue === "") {
      errorMessageElement.innerText = "Обязательное поле";
      isValid = false;
    } else {
      errorMessageElement.innerText = "";
    }
  }
}