import { Position } from 'reactflow';

const nodeDefaults = {
  sourcePosition: Position.Right,
  targetPosition: Position.Left,
  style: {
    borderRadius: '100%',
    backgroundColor: '#34b4eb',
    width: 50,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const initialNodes = [
  {
    id: '1',
    position: { x: 0, y: 0 },
    data: {
      label: 'Stage 1',
    },
    ...nodeDefaults,
  },
  {
    id: '2',
    position: { x: 250, y: -100 },
    data: {
      label: 'Stage 2',
    },
    ...nodeDefaults,
  },
  {
    id: '3',
    position: { x: 250, y: 0 },
    data: {
      label: 'Stage 3',
    },
    ...nodeDefaults,
  },
  {
    id: '4',
    position: { x: 250, y: 100 },
    data: {
      label: 'Stage 4',
    },
    ...nodeDefaults,
  },
  {
    id: '5',
    position: { x: 500, y: 0 },
    data: {
      label: 'Stage 5',
    },
    ...nodeDefaults,
  },
  {
    id: '6',
    position: { x: 750, y: 0 },
    data: {
      label: 'Stage 6',
    },
    ...nodeDefaults,
  },
];

const initialEdges = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
  },
  {
    id: 'e1-3',
    source: '1',
    target: '3',
  },
  {
    id: 'e1-2',
    source: '1',
    target: '4',
  },
  {
    id: 'e1-2',
    source: '2',
    target: '5',
    animated: true,
  },
  {
    id: 'e1-2',
    source: '3',
    target: '5',
  },
  {
    id: 'e1-2',
    source: '4',
    target: '5',
  },
  {
    id: 'e1-2',
    source: '5',
    target: '6',
    animated: true,
  },
];

export { initialEdges, initialNodes };
