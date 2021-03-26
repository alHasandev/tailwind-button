function debounce(func, delay) {
  let inDebounce;

  return function () {
    let args = arguments;
    let context = this;

    clearTimeout(inDebounce);
    return (inDebounce = setTimeout(() => {
      return func.apply(context, args);
    }, delay));
  };
}
