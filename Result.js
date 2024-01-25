import React from 'react'

function Result (props)  {
   const {secreteNumber,num}=props;
    let result;
  if(num>secreteNumber){
    result="higher";
  }
  else if(num<secreteNumber){
    result="lower";
  }
  else if(num == secreteNumber){
    result="correct !!!"
  }
  else{
   result="enter valid number"
  }
   return (
   

        <div>You guessed :{result}</div>
  )
}

export default Result