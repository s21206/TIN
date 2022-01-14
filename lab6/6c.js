function check() {
  if(document.Form.Login.value == "" && document.Form.Mail.value == "")
  {
   alert("The fields are emtpy.");
   document.Form.Login.style.borderColor = "red";
   document.Form.Mail.style.borderColor = "red";
   return false;
 }
  if(document.Form.Login.value == "")
  {
    alert("Login is empty.");
    document.Form.Login.style.borderColor = "red";
    return false;
  }else
  {
    document.Form.Login.style.borderColor = "green";
  }
  if(document.Form.Mail.value == "")
  {
    alert("E-mail is empty.");
    document.Form.Mail.style.borderColor = "red";
    return false;
  }else
  {
  var regular = /\S+@\S+\.\S+/;

  if (!regular .test(document.Form.Mail.value))
  {
    alert("E-mail format is incorrect to accept.");
    document.Form.Mail.style.borderColor = "red";
    return false;
  }else
  {
    document.Form.Mail.style.borderColor = "green";
  }
}
  alert("OK");
  return true;
}
