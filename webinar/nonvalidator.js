require('dotenv').config({path: ".env-node3"});

let app = require('lotion')({
  genesis: './genesis.json',
  initialState: { messages: [] },
  tendermintPort: 46657,
  logTendermint: true,
  peers: ['ws://159.122.175.154:30092','ws://184.173.1.108:30092']
})
app.use((state, tx) => {
  if (typeof tx.sender === 'string' && typeof tx.message === 'string') {
    state.messages.push({ sender: tx.sender, message: tx.message })
  }
})
app.listen(3002).then(({ GCI }) => {
  console.log(GCI)
})