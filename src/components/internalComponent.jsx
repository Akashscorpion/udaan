import React from 'react'
import './internalComponent.css'

var arr= [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]
for(let i=0;i<=500;i++){
    arr.push(i);
}
function internalComponent() {
    function items(){
        
        return (<textarea ></textarea>);
    }
 

    return (
        <div>
         {arr.map((i=>i,()=>{return items() }))}
        </div>
    )
}

export default internalComponent
