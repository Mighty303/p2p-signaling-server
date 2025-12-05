# PeerJS Signaling Server 🚀

A lightweight PeerJS signaling server for peer-to-peer WebRTC connections. This server facilitates the initial connection handshake between peers, enabling direct P2P communication for file sharing, video calls, and real-time data transfer.

## 🌟 Features

- **WebRTC Signaling**: Handles peer discovery and connection establishment
- **CORS Enabled**: Supports cross-origin requests for web applications
- **Health Monitoring**: Built-in health check endpoints
- **Connection Logging**: Real-time peer connection/disconnection tracking
- **Lightweight**: Minimal dependencies and fast deployment
- **Production Ready**: Configurable port via environment variables

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/Mighty303/p2p-signaling-server.git
cd p2p-signaling-server
```

2. Install dependencies:
```bash
npm install
```

## 🚀 Usage

### Development Mode

Start the server locally:
```bash
node server.js
```

The server will start on port `9000` by default.

### Production Mode

Set a custom port using environment variables:
```bash
PORT=3000 node server.js
```

Or use a `.env` file:
```bash
echo "PORT=3000" > .env
node server.js
```

## 📡 API Endpoints

### Health Check
- **GET** `/` - Server status and uptime
- **GET** `/health` - Health check endpoint

### PeerJS Signaling
- **Path**: `/peerjs` - PeerJS signaling endpoint for WebRTC connections

## 🔌 Client Connection

Connect to this server from your client application:

```javascript
import Peer from 'peerjs';

const peer = new Peer({
  host: 'localhost',
  port: 9000,
  path: '/peerjs'
});

peer.on('open', (id) => {
  console.log('My peer ID is: ' + id);
});
```

For production, replace `localhost` with your deployed server URL.

## 🛠️ Technologies

- **Express.js** - Web framework
- **PeerJS** - WebRTC peer-to-peer library
- **CORS** - Cross-origin resource sharing
- **HTTP** - Node.js HTTP server

## 📦 Dependencies

```json
{
  "express": "^5.2.1",
  "peer": "^1.0.2",
  "cors": "^2.8.5",
  "dotenv": "^17.2.3"
}
```

## 🌐 Deployment

### Deploy to Heroku

1. Create a Heroku app:
```bash
heroku create your-app-name
```

2. Deploy:
```bash
git push heroku main
```

### Deploy to Railway/Render

1. Connect your GitHub repository
2. Set environment variable: `PORT` (usually auto-configured)
3. Deploy

## 🔍 Monitoring

The server logs peer connections and disconnections:
- `🔗 Peer connected: [peer-id]`
- `❌ Peer disconnected: [peer-id]`

## 📝 Configuration

| Environment Variable | Default | Description |
|---------------------|---------|-------------|
| `PORT` | `9000` | Server port number |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

ISC

## 👤 Author

GitHub: [@Mighty303](https://github.com/Mighty303)

## 🐛 Issues

Found a bug? Please [open an issue](https://github.com/Mighty303/p2p-signaling-server/issues).

## 📚 Related Projects

- [PeerJS](https://peerjs.com/) - Simple peer-to-peer with WebRTC
- [WebRTC](https://webrtc.org/) - Real-time communication for the web

---

Made with ❤️ for P2P communication
