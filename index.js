import server from './server.js'

// Starting server
const port = process.env.PORT || 3000;
server.listen(port, (err) => {
    if (!err)
        console.log(`Server is Successfully Running, and App is listening on port ${port}`)
    else
        console.log("Error occurred, server can't start", err);
}
);
