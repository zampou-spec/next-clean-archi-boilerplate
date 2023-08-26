function callAll<T extends unknown[]>(...fns: Array<(...args: T) => void | undefined | unknown>) {
  return (...args: T) => fns.forEach((fn) => fn && fn(...args));
}

export default callAll;
