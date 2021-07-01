import React from 'react'
import InternalComponent from './internalComponent'
var arr= [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]
for(let i=0;i<=500;i++){
    arr.push(i);
}

function thComp() {
    return (
        <div>
             {arr.map((i=>i,()=>{return <InternalComponent/> }))}
        </div>
    )
}

export default thComp
