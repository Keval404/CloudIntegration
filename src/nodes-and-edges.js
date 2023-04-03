import { Position } from 'reactflow';

const nodeDefaults = {
  sourcePosition: Position.Right,
  targetPosition: Position.Left,
  style: {
    borderRadius: '100%',
    backgroundColor: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

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


export { initialEdges, initialNodes };
