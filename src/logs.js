import React, { Fragment } from 'react'
import ReactFlow,{Background, Node} from 'react-flow-renderer'

// const nodeStyle = {
//   backgroundColor: 'green',
// };

const initialNodes = [
    { id: '1', position: { x: 200, y: 50}, data: { label: '1' } },
    { id: '2', position: { x: 400, y: 0 }, data: { label: '2' } },
    { id: '3', position: { x: 400, y: 100 }, data: { label: '3' } },
    { id: '4', position: { x: 600, y: 50 }, data: { label: '4' } },
    { id: '5', position: { x: 800, y: 50 }, data: { label: '5' } },
];

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' },
{ id: 'e1-2', source: '1', target: '3' },
{ id: 'e1-2', source: '2', target: '4' },
{ id: 'e1-2', source: '3', target: '4' },
{ id: 'e1-2', source: '4', target: '5' }];


const Logs = () => {
  return (
    <>
        <div style={{ width: '100vw', height: '100vh' }}>
            {/* <ReactFlow nodes={initialNodes} edges={initialEdges} snapToGrid={true} snapGrid={[16,16]} /> */}
            {/* <ReactFlow elements={initialNodes.concat(initialEdges)} /> */}
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