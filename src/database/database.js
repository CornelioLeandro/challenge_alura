import mongoose from "mongoose"

mongoose.set("strictQuery", true);

const connection = async () => {
 await mongoose.connect('mongodb+srv://leandro:1234@rabbit.bq557oi.mongodb.net/',
 {useNewUrlParser: true,
  useUnifiedTopology: true})
}
console.log("conectou")

export default connection