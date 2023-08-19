function failure(err){
    console.log('Failed',err)
}

function success(result){
    console.log('Success',result)
}


function validate(name,yesSuccess,noError){
    if(name==='abcs'){
        yesSuccess('Name is validated')
    }else{
        noError('Not validated')
    }
}

validate('Faizan',success,failure)
validate('abcs',success,failure)