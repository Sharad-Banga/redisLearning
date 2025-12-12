import {createClient} from 'redis';


async function cal() {

  const client = createClient();
  await client.connect();
  
  console.log(client.isReady);

}

cal();

