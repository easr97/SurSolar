function checkForm(e) {
  let valid = true;
  inputs = document.querySelectorAll('[type="text"]','[type="email"]')
  for(input of inputs){
    if(input.value.trim()==''){
      valid = false;
      break;
    }
  }
  return valid;
}  