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


/***********  Second Solution which is (This is the fast solution)>> set.has() << takes O(1) *******/
/***********  Time Complexity: O(n + k) **************/

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