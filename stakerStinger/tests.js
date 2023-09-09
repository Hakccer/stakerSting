function getDistinctArray(arr){
    let new_arr = [];
    for(let i = 0; i < arr.length; i++){
        if(!new_arr.includes(arr[i])){
            new_arr.push(arr[i])
        }
    }
    return new_arr;
}

function returnNonDivisableSets(k, s){
    console.log("working");
    let s_ = []
    for(let i = 0; i < s.length; i++){
        let temp_arr = []
        temp_arr.push(s[i]);
        for(let j = 0; j < s.length; j++){
            if(s[i] == s[j] || temp_arr.includes(s[j])) continue;
            // else now writing the main logic here
            if(temp_arr.length != 0){
                // now iterating through the temp_arr
                let can_add = j;
                for (let l = 0; l < temp_arr.length; l++) {
                    if((temp_arr[l] + s[j]) % k == 0){
                        can_add = undefined;
                        break;
                    }
                }
                if (can_add) temp_arr.push(s[j])
            }
        }
        s_.push(temp_arr);
        console.log(s_);
        // now checking if all the elements are in the array or not
        let exit = false;
        let distinct_arr_length = getDistinctArray(s);
        let secondary_arr_length;
        let merged_arr = []
        // mergin a bunch of arrs
        let deep_arr_index = 0;
        while (deep_arr_index < s_.length){
            merged_arr = [...s_[deep_arr_index],...merged_arr];
            deep_arr_index ++;
        }
        secondary_arr_length = getDistinctArray(merged_arr);
        if(distinct_arr_length.length == secondary_arr_length.length){
            return s_
        }
    }
}

console.log(returnNonDivisableSets(4, [19,10,12,10,24,25,22]));