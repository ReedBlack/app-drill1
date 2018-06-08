var arr = [0, 1, 8, 10, 11]

function even() {
    var emArr = []
    for (var i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
        emArr.push(arr[i])

        }
    } 
    return emArr
}
even(arr)
