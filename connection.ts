const mongoose = require('mongoose')

mongoose.connect(process.env.CONNECTLION_STRING)
    .then((res:any) => {console.log("Connection stablished successfully") })
    .catch((err: any) => { console.log('error', err?.message || err) })
