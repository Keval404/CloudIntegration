// export const Pipelines = [
//     { id: 1, name: 'John Doe', email: 'johndoe@example.com', phone: '555-555-1234' },
//     { id: 2, name: 'Jane Smith', email: 'janesmith@example.com', phone: '555-555-5678' },
//     { id: 3, name: 'Bob Johnson', email: 'bobjohnson@example.com', phone: '555-555-9012' },
// ];

export const Pipelines = [
    {"name":"Test","description":"Test Pipeline","created_at":"2023-04-04T12:17:51Z","user":"http://localhost:8000/user/1/","trigger":"* * * * *","is_stream":"false","configuration":"{\"name\": \"Pipeline Name\", \"description\": \"Short Description\", \"email\": true, \"slack\": true, \"retries\": 3, \"retry_delay\": \"10s\", \"tasks\": [{\"name\": \"stage1\", \"resources\": [\"kafka\", \"hadoop\", \"elasticsearch\"], \"commands\": [{\"operator\": \"bash\", \"file\": \"create.sh\"}]}, {\"name\": \"stage2\", \"resources\": [\"kafka\", \"hadoop\", \"elasticsearch\"], \"commands\": [{\"operator\": \"python\", \"file\": \"main.py\"}], \"dependency\": [\"stage1\"]}]}"},
    {"name":"Test","description":"Test Pipeline","created_at":"2023-04-04T12:17:51Z","user":"http://localhost:8000/user/1/","trigger":"* * * * *","is_stream":"false","configuration":"{\"name\": \"Pipeline Name\", \"description\": \"Short Description\", \"email\": true, \"slack\": true, \"retries\": 3, \"retry_delay\": \"10s\", \"tasks\": [{\"name\": \"stage1\", \"resources\": [\"kafka\", \"hadoop\", \"elasticsearch\"], \"commands\": [{\"operator\": \"bash\", \"file\": \"create.sh\"}]}, {\"name\": \"stage2\", \"resources\": [\"kafka\", \"hadoop\", \"elasticsearch\"], \"commands\": [{\"operator\": \"python\", \"file\": \"main.py\"}], \"dependency\": [\"stage1\"]}]}"}
]