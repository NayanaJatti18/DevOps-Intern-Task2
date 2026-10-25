const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Jenkins CI/CD App</title>
        </head>
        <body>
            <h1>DevOps Intern TASK-2 by NAYANA</h1>
            <h2>Hello from Jenkins CI/CD!</h2>
            <p>Your Node.js application is running inside Docker.</p>
            <p>Build, test, and deployment pipeline completed.</p>
        </body>
        </html>
    `);
});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
