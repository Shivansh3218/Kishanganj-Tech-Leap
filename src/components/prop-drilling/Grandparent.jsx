import React from 'react'
import Parent from './Parent'

function Grandparent() {
    console.log(props, " this is from grandparent");
    return (
        <div>Grandparent
            <Parent props={props} />
        </div>
    )
}

export default Grandparent