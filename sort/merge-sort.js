/************************************************
 * Standard
 */
function mergeSort(array) {
    var length = array && array.length,
        midpoint;

    if (!length) {
        return [];
    } else if (length === 1) {
        return array;
    } else {
        midpoint = Math.floor(length / 2);
        return merge(mergeSort(array.slice(0, midpoint)), mergeSort(array.slice(midpoint)));
    }
}

function merge(arrayA, arrayB) {
    var aLength = arrayA.length,
        bLength = arrayB.length,
        result = [],
        i = 0, j = 0, 
        aValue, bValue;

    while (result.length < (aLength + bLength)) {
        aValue = arrayA[i];
        aValue = aValue === undefined ? Infinity : aValue;
        bValue = arrayB[j];
        bValue = bValue === undefined ? Infinity : bValue;

        if (aValue < bValue) {
            result.push(aValue);
            i++;
        } else {
            result.push(bValue);
            j++;
        }
    }
    return result;
}

/************************************************
 * In Place
 */
function mergeSortInPlace (array) {
    var length = array && array.length;
    if (!length || length === 1) {
        return array;
    }
    return _mergeSortInPlace(array, 0, length - 1);
}

function _mergeSortInPlace(array, start, end) {
    var length = count(start, end),
        delta = Math.floor(length / 2),
        mp = start + delta, initial = array.slice(start, end + 1);

    
    if (length === 2) {
        mergeInPlace(array, start, mp, end, end);
    } else if (length > 2) {
        _mergeSortInPlace(array, start, mp);
        _mergeSortInPlace(array, mp + 1, end);
        mergeInPlace(array, start, mp, mp + 1, end);
    }
    return array;
}

function count(startIndex, endIndex) {
    var delta = endIndex - startIndex;
    return delta < 0 ? 0 : delta + 1;
}

function mergeInPlace(array, startA, endA, startB, endB) {
    var a = startA, 
        b = startB,
        index = startA,
        aValue, bValue;

    

    while (index < endB) {
        aValue = a > endA ? Infinity : array[a];  //Can't place any more A items        
        bValue = b > endB ? Infinity : array[b];  //Can't place any more B items

        if (a > endA) {
            //All a's are placed, we should continue with all items from B...
        } else if (aValue < bValue) {
            //aValue is in correct place, increment 'a' pointer
            a++;
        } else if (b <= endB) {
            //move bValue to position of index, shift all remaining items right
            moveLeft(array, b, index);
            a++;
            b++;
        }
        index++;
    }
    return array;
}

function moveLeft(array, start, destination) {
    var i = start, 
        value = array[start];

    while (i > destination) {
        array[i] = array[i - 1];
        i--;
    }
    array[destination] = value;
}

module.exports = {
    sort: mergeSort,
    sortInPlace: mergeSortInPlace
};