const redis = require("redis");

let client = redis.createClient({ legacyMode: true });

client.connect().catch(console.error);

client.on("error", err => {
    console.error(err);
});


client.set("key","value",(err, msg)=>{
    if(err){
        console.log(err);
    }
    console.log(msg);
})