const number = {
  add0Prefix: (payload: any) => {
    const stringifiedNumber = JSON.stringify(payload);

    if (stringifiedNumber.length > 1) {
      return `${stringifiedNumber}`;
    }
    return `0${stringifiedNumber}`;
  },
};

export default number;
