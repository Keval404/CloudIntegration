import React, { Fragment } from 'react'
import ReactFlow,{Background, Node} from 'react-flow-renderer'
import { initialEdges, initialNodes } from './nodes-and-edges';


const Logs = () => {
  return (
    <>
        <div style={{ width: '80vw', height: '50vh' }}>
            <ReactFlow
              nodes={initialNodes}
              edges={initialEdges}
              fitView
            >
            <Background color="#aaa" gap={16} />
          </ReactFlow>
        </div>
    </>
  )
}

export default Logs