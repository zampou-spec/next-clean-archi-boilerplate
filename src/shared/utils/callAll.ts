function callAll(...fns: any[]) {
  return (...args: any) => fns.forEach((fn) => fn && fn(args));
}

export default callAll;
