const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose.connect("mongodb+srv://Armaan0310:Armaan0309@cluster0.hqbuk5l.mongodb.net/").then(() => console.log('connected mongo DB')).catch((e) => console.log(e));