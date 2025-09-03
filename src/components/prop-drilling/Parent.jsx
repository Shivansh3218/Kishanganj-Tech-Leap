import React from 'react'
import Child from './Child'

function Parent({
    props
}) {

    console.log(props, " this is from parent");
  return (
      <div>Parent

          <Child props={props} />
    </div>
  )
}

export default Parent