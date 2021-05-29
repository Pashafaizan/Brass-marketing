const mongoose = require('mongoose')
exports.connectToMongoDB = async ()=> {
  try {
    await mongoose.connect(('mongodb://127.0.0.1:27017/vollack'),
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    console.log("Connected to MongoDB...")
  } catch (err) {
    console.log(err.message)
    process.exit(1)
  }
}
