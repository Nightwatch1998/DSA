// 使用时间戳
function throttle1(func,wait){
  let preTime = 0
  return function(){
    let nowTime = new Date()
    let context = this
    let args = arguments
    if(nowTime-preTime>wait){
      func.apply(context,args)
      preTime = nowTime
    }
  }
}

// 基于定时器实现
function throttle2(func,wait){
  let timeout
  return function(){
    let context = this
    let args = arguments
    if(!timeout){
      timeout = setTimeout(function(){
        timeout = null
        func.apply(context,args)
      },wait)
    }
  }
}