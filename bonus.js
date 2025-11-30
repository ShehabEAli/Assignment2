/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
/***********  first Solution which is  >> arr.includes() << takes O(n) **************/
/***********  Time Complexity: O(n * k) **************/
var findKthPositive = function(arr, k) {
    var missingCount = 1;
    while(k > 0)
    {
        if(!arr.includes(missingCount))
        {
            k--;
        }
        missingCount++;
    }
    return missingCount -1 ;
};


/***********  Another Fast Solution which is >> set.has() << takes O(1) **************/
/***********  Time Complexity: O(n + k) **************/
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    const set = new Set(arr);
    var missingCount = 1;
    while(k > 0)
    {
        if(!set.has(missingCount))
        {
            k--;
        }
        missingCount++;
    }
    return missingCount - 1;
};