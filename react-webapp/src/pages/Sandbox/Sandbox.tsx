import React from 'react';

import Selector from "../../components/basic/Selector"

const Sandbox: React.FC = () => {
  
  const testFunction = (item: any) => {
    console.log(item)
  }

  return (
    <main>
      <div style={{margin:"1rem"}}>
      <Selector 
        props={{
          name: "test", type: "basic",
          options: [{value: "test1", placeholder: "ftest1"}, {value: "test2", placeholder: "ftest2"}]
        }}
        onChange={testFunction}
      />
      </div>
    </main>
  )
}


export default Sandbox;
