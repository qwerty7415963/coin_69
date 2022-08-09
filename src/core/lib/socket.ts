const bybitWebSocket = new WebSocket('wss://stream-testnet.bybit.com/spot/quote/ws/v2')

export const maintainWebSocketConnection = () => {
	bybitWebSocket.send(JSON.stringify({ ping: 1535975085052 }))
}
