let readyPlayerCount = 0;

function listen(io) {
    const pongNameSpace = io.of('/pong');
    pongNameSpace.on('connection', (socket) => {
        let room;
        console.log('A User Connected.');
        console.log('User Id: ', socket.id);
        socket.on('ready', () => {
            room = 'Room' + Math.floor(readyPlayerCount / 2);
            socket.join(room);

            readyPlayerCount++;
            console.log('Player Ready', socket.id, room);

            if (readyPlayerCount % 2 === 0) {
                pongNameSpace.in(room).emit('startGame', socket.id);
            }
        });

        socket.on('paddleMove', (paddleData) => {
            socket.to(room).emit('paddleMove', paddleData);
        });

        socket.on('ballMove', (ballData) => {
            socket.to(room).emit('ballMove', ballData);
        });

        socket.on('disconnect', (reason) => {
            console.log(`Client ${socket.id} Disconnected: ${reason}`);
            socket.leave(room);
        });
    });
}

module.exports = {
    listen
};