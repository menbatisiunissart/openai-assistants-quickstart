export let assistantId = ""; // set your assistant ID here
export let title = "";
export let description = "";
export let basicChatTitle = "";

if (assistantId === "") {
  assistantId = process.env.OPENAI_ASSISTANT_ID;
}

if (title === "") {
  title = process.env.TITLE;
}

if (description === "") {
  description = process.env.DESCRIPTION;
}

if (basicChatTitle === "") {
  basicChatTitle = process.env.BASIC_CHAT_TITLE;
}