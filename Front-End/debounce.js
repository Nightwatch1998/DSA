/**
 * 防抖
 */
function debounce(func,wait,immediate){
  let timeout
  return function(){
    let context = this
    let args = arguments
    // 如果之前设置了，清除
    if(timeout) clearTimeout(timeout)
    // 如果立即执行
    if(immediate){
      let callNow = !timeout
      // wait之后清除定时器
      timeout = setTimeout(function(){
        timeout = null
      },wait)
      if(callNow) func.apply(context,args)
    }else{
      timeout = setTimeout(function(){
        func.apply(context,args)
      },wait)
    }
  }
}