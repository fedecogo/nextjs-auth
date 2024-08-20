import mongoose from "mongoose";

const connectToDB = async () => {
  const url =
  "mongodb+srv://federicocapiz02:GJJoFhWK7dRCdlKN@cluster0.pclxggg.mongodb.net/";

  mongoose
    .connect(url)
    .then(() => console.log("Database connection is successful"))
    .catch((e) => console.log("Ah shit, here we go again " + e));
};

export default connectToDB;