export const getHelper = (errors, inputType) => {
    const helper = {
      isError: null,
      message: '',
    };
    if (errors) {
      errors.forEach((error) => {
        if (error.param === inputType) {
          helper.isError = true;
          helper.message = error.msg;
        }
      });
    }
    return helper;
  };