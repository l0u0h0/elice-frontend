const useDebounce = (func: any, delay: number) => {
  let timeout: NodeJS.Timeout | null;

  return (...args: any[]) => {
    const context = this;

    if (timeout) window.clearTimeout(timeout);

    timeout = setTimeout(() => {
      timeout = null;
      func.apply(context, args);
    }, delay);
  };
};

export default useDebounce;
