import dotenv from "dotenv";
dotenv.config();

import Anthropic from "@anthropic-ai/sdk";
const client = new Anthropic();

console.log("MODEL:", "claude-sonnet-4-6");
console.log("KEY EXISTS:", !!process.env.ANTHROPIC_API_KEY);

async function main() {
  try{
    const response = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 256,
    messages: [
      { role: "user", content: "What is a neural network in one sentence?" }
    ],
  });
  console.log(response);
  } catch (err) {
    console.error("Real Error:");
    console.error(JSON.stringify(err, null, 2));
    console.error(err);
  
  //console.log("KEY:", process.env.ANTHROPIC_API_KEY);
  }
}
main();
/*
  for (const block of response.content ?? []) {
    if (block.type === "text") {
      console.log(block.text);
    }
  }
}
main().catch((err) => {

  console.error("ERROR CAUGHT:", err);

});
//main().catch(console.error); */


/*import dotenv from "dotenv";
dotenv.config();

console.log("KEY:", process.env.ANTHROPIC_API_KEY);

import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

const response = await client.messages.create({
  model: "claude-sonnet-4-6",
  max_tokens: 256,
  messages: [{ role: "user", content: "What is a neural network in one sentence?" }],
});

for (const block of response.content ?? []) {
  if (block.type === "text") {
    console.log(block.text);
  }
}
//console.log(response.content[0].text); */