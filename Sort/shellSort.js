/**
 *  希尔排序本质是分组后进行插入排序，减小排序问题的规模，使之更容易解决
 * 具体的gap要根据数据集选择，有不同的序列
 * @param {*} arr 待排序数组
 * @returns 
 */
function shellSort(arr){
    let gap = Math.floor(arr.length/2)
    while(gap>0){
        // 根据gap分为多个序列，每个序列进行插入排序
        for(let i=0;i<arr.length;i++){
            let temp = arr[i]
            let j = i
            // 从第二个数开始插入排序
            while(j>=gap&&arr[j-gap]>temp){
                arr[j] = arr[j-gap]
                j-=gap
            }
            arr[j] = temp
        }
        gap = Math.floor(gap/2)
    }
    return arr
}

module.exports = {
    shellSort
}