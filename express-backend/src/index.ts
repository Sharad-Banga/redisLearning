import express from 'express';
import { createClient } from 'redis';

const client = createClient();
// client.connect();
const app = express();
app.use(express.json());


app.post("/submit",async (req,res)=>{

    const {problemId , userId, code , lang} = req.body;

    await client.lPush("submissions",JSON.stringify({problemId , userId, code , lang}));

    res.send({status: "Submission received"});
})


async function comm() {

 try {
    await client.connect();
    console.log("✅ Connected to Redis");

    app.listen(3000, () => {
      console.log("🚀 Server is running on port 3000");
    });
  } catch (err) {
    console.error("❌ Redis connection error:", err);
  }
}

comm();
