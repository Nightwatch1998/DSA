function myInstanceof(target,origin){
  // 非基础类型 typeof 都是object
  if(typeof target !== "object" || target === null) return false
  if(typeof origin !== "function"){
    throw new TypeError("origin must be function")
  }
  let proto = Object.getPrototypeOf(target)
  while(proto){
    if(proto === origin.prototype) return true
    proto = Object.getPrototypeOf(proto)
  }
  return false
}