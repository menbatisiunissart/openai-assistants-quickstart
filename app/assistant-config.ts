export let assistantId = ""; // set your assistant ID here
export let title = "";
export let description = "";
export let icon = "";

if (assistantId === "") {
  assistantId = process.env.OPENAI_ASSISTANT_ID;
}

if (title === "") {
  title = process.env.TITLE;
}

if (description === "") {
  description = process.env.DESCRIPTION;
}

if (icon === "") {
  icon = process.env.ICON;
}