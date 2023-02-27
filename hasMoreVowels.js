let vowels = ['a', 'e', 'i', 'u', 'o', 'u']


function hasMoreVowels(word){
    let count = 0
    let count2 = 0
    for(let i = 0; i < word.length; i++){
        if(vowels.includes(word[i])){
            count++
        }else{
            count2++
        }
    }
    if(count > count2){
        return true
    }else if(count < count2){
        return false
    }else{
        return 'equal'
    }
}

const check = hasMoreVowels('book')
console.log(check)