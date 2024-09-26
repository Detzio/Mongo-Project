const mongoose = require('mongoose');

async function connect(){
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/esgi");
        console.log("connexion mongo réussie!");
    }catch(e){
        console.error("connexion echouée : " + e.message);
    }
}

module.exports= {connect};