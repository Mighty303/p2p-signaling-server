const express = require('express');
const { ExpressPeerServer } = require('peer');
const cors = require('cors');
const http = require('http');

const app = express();
const server = http.createServer(app);

app.use(cors());

// Health check
app.get('/', (req, res) => {
  res.json({ 
    status: 'ok', 
    service: 'PeerJS Signaling Server',
    uptime: process.uptime() 
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

// PeerJS server
const peerServer = ExpressPeerServer(server, {
  path: '/',
  debug: true,
  allow_discovery: true
});

app.use('/peerjs', peerServer);

peerServer.on('connection', (client) => {
  console.log(`🔗 Peer connected: ${client.getId()}`);
});

peerServer.on('disconnect', (client) => {
  console.log(`❌ Peer disconnected: ${client.getId()}`);
});

const PORT = process.env.PORT || 9000;
server.listen(PORT, () => {
  console.log(`🚀 PeerJS Signaling Server on port ${PORT}`);
  console.log(`📡 Endpoint: /peerjs`);
});