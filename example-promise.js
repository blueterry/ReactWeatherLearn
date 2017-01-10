/*
function getTempCallback(loc, callback){
    callback(undefined, 28);
    callback('City not found');
}

getTempCallback('Beijing', function(err, temp){
    if(err){
        console.log('error', err);
    } else{
        console.log('success',temp);
    }
});

function getTempPromise(loc){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(-2);
            reject('City is invalid');
        }, 1000);
        
    });
}

getTempPromise('Beijing').then(function(temp){
    console.log('promise success', temp);
}, function(err){
    console.log('promise error', err);
});
*/

// Challenge Area

function addPromise (a, b){
    return new Promise(function(resolve, reject){
        
        if(typeof a === 'number' && typeof b === 'number'){
            var c = a+b;
            resolve(c);
        }
        else{
            reject ('both params must be number');
        }
    });
}

function calc (a, b){
    addPromise(a,b).then(function(sum){
        console.log('result:', sum);
    },function(err){
        console.log('error:',err, 'a:', a,' b:', b);
    });
}

calc (3, 8);
calc ('3', 8);
calc ('a','b');
calc (3, 'Terry');
