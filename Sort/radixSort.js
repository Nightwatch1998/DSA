function radixSort(arr){
    if(arr.length<=1){
        return arr
    }
    // 获取最大值和位数
    let maxNum = Math.max(...arr)
    let digit = 0
    while(maxNum){
        digit++
        maxNum = Math.floor(maxNum/10)
    }

    // LSD方式排序
    for(let i=0;i<digit;i++){
        let count = new Array(10).fill(0)
        for(let e of arr){
            // e的个位数
            let idx = Math.floor(e/Math.pow(10,i))%10
            count[idx]++
        }
        // 按个位计数排序
        for(let j=1;j<10;j++){
            count[j]+=count[j-1]
        }
        let res = new Array(arr.length)
        for(let k = arr.length-1;k>=0;k--){
            // 按个位数放在对应的桶中
            let idx = Math.floor(arr[k]/Math.pow(10,i))%10
            res[count[idx]-1] = arr[k]
            count[idx]--
        }
        arr = res
        console.log(arr)
    }
    return arr
}

module.exports = {
    radixSort
}