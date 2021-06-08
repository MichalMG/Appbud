function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
  const re = /^(((?:(?:(?:\+|00)?48)|(?:\(\+?48\)))?(?:1[2-8]|2[2-69]|3[2-49]|4[1-8]|5[0-9]|6[0-35-9]|[7-8][1-9]|9[145])\d{7}))$/;
  return re.test(String(phone).toLowerCase());
}

const validateHandler = {
  required: function (val) {
    return val ? '' : "Pole wymagane! "
  },
  email(val) {
    const mail = validateEmail(val);
    return mail ? '' : 'Niepoprawny adres email'
  },
  text(val) {
    if (val.length < 9) {
      return 'Wiadomość nie powinna być krótsza niż 10 znaków';
    }
    return '';
  },
  phone(val) {
    const phone = validatePhone(val);
    return phone ? '' : 'Niepoprawny numer telefonu';
  },
  length(rule, val) {
    console.log('wchodzi do obj length')
    console.log(rule, val);
    if (val.length < rule.length) {
      return `Wymagane minimum ${rule.length} znaków`
    } else {
      return '';
    }
  }
}


export default function validation(value, rules = []) {
  // let errorMessage = '';
  // rules.map(rule => {
  //   if (rule instanceof Object) {
  //     const errorMessageValidation = validateHandler[rule.rule](rule, value);
  //     console.log(errorMessageValidation);
  //     errorMessage = errorMessageValidation;
  //   } else {
  //     const errorMessageValidation = validateHandler[rule](value);
  //     if (errorMessageValidation) {
  //       errorMessage = errorMessageValidation;
  //     } else {
  //       errorMessage = "";
  //     }
  //   }
  // });

  for (let i = 0; i < rules.length; i++) {
    const rule = rules[i];
    console.log(rule);
    if (rule instanceof Object) {
      const errorMessageVal = validateHandler[rule.rule](rule, value);
      if (errorMessageVal) {
        return errorMessageVal;
      }
    } else {
      const errorMessageVal = validateHandler[rule](value);
      if (errorMessageVal) {
        return errorMessageVal;
      }
    }
  }

  return '';
}