const mongoose = require('mongoose')
exports.connectToMongoDB = async ()=> {
  try {
    await mongoose.connect(('mongodb+srv://faizan_pasha:Fa@pasha123@cluster0.ebgsh.mongodb.net/anfa?retryWrites=true&w=majority'),
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
