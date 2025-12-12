import {createClient} from 'redis';
const client  = createClient();

async function cal(){
  
  await client.connect();
  await client.set("name","sharad");
  let val = await client.get("name");
  console.log("my name is : ",val);
  
}

cal();