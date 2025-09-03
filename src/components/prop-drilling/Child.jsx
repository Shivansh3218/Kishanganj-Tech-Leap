import { useContext } from 'react'
import { DataContext } from '../contexts/DataContext'


function Child() {
    const { data, setData } = useContext(DataContext);
    
    console.log( " this is from child");
  return (
      <div>
          <h1>This is the child</h1>
          <h1>{data}</h1>
    </div>
  )
}

export default Child