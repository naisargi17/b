import mongoose from 'mongoose';



 const Connection = async(username,password) =>{
    const URL = `mongodb://${username}:${password}@ac-crxjr4k-shard-00-00.ltxrj1h.mongodb.net:27017,ac-crxjr4k-shard-00-01.ltxrj1h.mongodb.net:27017,ac-crxjr4k-shard-00-02.ltxrj1h.mongodb.net:27017/?ssl=true&replicaSet=atlas-2lrv7t-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try{

       await mongoose.connect(URL,{useNewUrlParser: true});
       console.log('connected successfully !!');
    }catch(error){
        console.log(`Error : ${error}`);
    }
}

export default Connection;