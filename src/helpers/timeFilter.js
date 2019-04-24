function timeFilter(time){
    let dateObj = typeof time === 'object' ? time : new Date(time)
    let date = dateObj.getTime()
    let nowDate = new Date()
    let times = nowDate - date
    let str = ''

    switch(true){
        case  times<60*1000: 
          str = '刚刚'
          break
        case  times<60*60*1000:
          str = Math.floor(times/(60*1000)) + ' 分前'
          break
        case  times<24*60*60*1000:
          str = Math.floor(times/(60*60*1000)) + ' 小时前'
          break
        default:
          str = Math.floor(times/(24*60*60*1000)) + ' 天前'
    }
    return str
}
export default {
    install(Vue, options){
        Vue.prototype.timeFilter = timeFilter 
    }
}