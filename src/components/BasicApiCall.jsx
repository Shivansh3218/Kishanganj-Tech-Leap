import React, { useEffect } from 'react'

function BasicApiCall() {

    const [data, setData] = React.useState(null)
    const [userId, setUserId] = React.useState(1)
    
    useEffect(() => {
 
        console.log("component did mount")
    }, [])
    
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:4000/users/${userId}`)

            const json = await response.json()
            console.log(json)
            setData(json)
        }
        fetchData()
        console.log("component did update for user id", userId)
    },[userId])



  return (
      <div>
          
          <h1>This is the basic api call component</h1>
            <h1>{data?.first_name}</h1>
          <button onClick={()=>setUserId(userId+1)}>Increase</button>

    </div>
  )
}

export default BasicApiCall


// useeffect. this replaces component did mount, component did update, component will unmount
// useeffect is a hook which takes two parameters. first is a function and second is a dependency array

// USE EFFECT TAKES 2 PARAMETERS
// 1. FUNCTION
// 2. DEPENDENCY ARRAY

// component lifecycle in react
// three phases of lifecycle
// 1. Mounting - when the component is being inserted into the DOM
// 2. Updating - when the component is being re-rendered as a result of changes to either its props or state
// 3. Unmounting - when the component is being removed from the DOM

//component did mount > we check if the component is mounted or not
// component did update > we check if the component is updated or not
// component will unmount > we check if the component is unmounted or not



// component did mount => useeffect with empty dependency array
// component did update => useeffect with dependency array having some state variable
// component will unmount => useeffect with return function and empty dependency array
// we use return function in useeffect to clean up the component before it is unmounted
//by default useeffect does not return anything. if we want to return something we have to use return statement



// ALL API CALLS ARE MADE IN USEEFFECT HOOK
// WE ALWAYS DECLARE USEEFFECT AT THE TOP OF THE COMPONENT