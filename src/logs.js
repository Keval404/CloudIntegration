import React from 'react'
import ReactFlow from 'react-flow-renderer'

const initialNodes = [
    { id: '1', position: { x: 0, y: 50}, data: { label: '1' } },
    { id: '2', position: { x: 200, y: 0 }, data: { label: '2' } },
    { id: '3', position: { x: 200, y: 100 }, data: { label: '3' } },
    { id: '4', position: { x: 400, y: 50 }, data: { label: '4' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' },
{ id: 'e1-2', source: '1', target: '3' },
{ id: 'e1-2', source: '2', target: '4' },
{ id: 'e1-2', source: '3', target: '4' }];

const Logs = () => {
  return (
    <>
        <div style={{ width: '100vw', height: '100vh' }}>
            <ReactFlow nodes={initialNodes} edges={initialEdges} />
        </div>
    </>
  )
}

export default Logs