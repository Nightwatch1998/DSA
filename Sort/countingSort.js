/**
 * 计数排序
 * @param {*} arr 
 * @returns 
 */
function countingSort(arr){
    // 找出最大值和最小值
    let max = arr[0]
    let min = arr[0]
    for(let i=1;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i]
        }else if(arr[i]<min){
            min = arr[i]
        }
    }
    // 统计数据出现的次数,可能为0,1，或者>=1
    let count = new Array(max-min+1).fill(0)
    for(let i=0;i<arr.length;i++){
        count[arr[i]-min]++
    }
    // 计算在排序后数组中的位置,右边界不包含
    for(let i=1;i<count.length;i++){
        count[i]+=count[i-1] 
    }
    let result = new Array(arr.length).fill(0)
    // 倒序排序，数据写入一次，统计的次数减一
    for(let i=arr.length-1;i>=0;i--){
        result[count[arr[i]-min]-1] = arr[i]
        count[arr[i]-min]--
    }
    return result
}

module.exports = {
    countingSort
}

