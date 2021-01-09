(function () {
  var backtotop = document.getElementById('backtotop')

  var timer

  backtotop.onclick = function () {
    // 设表先关
    clearInterval(timer)
    // 设置定时器
    timer = setInterval(function () { 
      document.documentElement.scrollTop -= 100

      if(document.documentElement.scrollTop <= 0){
        clearInterval(timer)
      }
     },20)
   }

   window.onscroll = function () { 
     var scrollTop = document.documentElement.scrollTop || window.scrollY

     if(scrollTop == 0){
       backtotop.style.display = 'none'
    }else{
      backtotop.style.display = 'block'
     }
    }
})()