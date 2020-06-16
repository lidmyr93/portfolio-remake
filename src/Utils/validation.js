export const simpleTextValidation = (value, min ,max) => {
    let reg = /^[a-zA-Z]+$/;
        
        if (reg.test(value) && value.length >= min && value.length <= max) {
            return true;
        }
       return false;
};

export const simpleEmailValidation = (value) => {
  let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

  if (reg.test(value)) {
    return true;
  }
  return false;
};
