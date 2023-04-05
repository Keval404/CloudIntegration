import React, { Fragment } from 'react'
import ReactFlow,{Background, Node} from 'react-flow-renderer'
import { initialEdges, initialNodes } from './nodes-and-edges';


const Logs = () => {
  const handleScroll = (event) => {
    event.preventDefault();
  };

  const handleTouchMove = (event) => {
    event.preventDefault();
  };
  return (
    <>
        <div className="m-auto" style={{ width: '70vw', height: '50vh' }}>
            <ReactFlow
              nodes={initialNodes}
              edges={initialEdges}
              panOnScrollSpeed={false}
              panOnDrag={false}
              panOnScroll={false}
              onWheel={handleScroll}
              onTouchMove={handleTouchMove}
              zoomOnScroll={false}
              zoomOnDoubleClick={false}
              zoomOnPinch={false}

              fitView
            >
            <Background color="#aaa" gap={16} />
          </ReactFlow>
        </div>
    </>
  )
}

export default Logs