import { nanoid } from "ai";
import { createAI, getMutableAIState } from "ai/rsc";

const userMessage = () => ({
  id: nanoid(),
  role: "user",
  content: "Hello, I am a user message",
});

const botMessage = () => ({
  id: nanoid(),
  role: "bot",
  content: "Hello, I am a bot message",
});

async function submitUserMessage() {
  "use server";

  const aiState = getMutableAIState();
  console.log("before:\n", aiState.get());

  aiState.update({
    ...aiState.get(),
    messages: [...aiState.get().messages, userMessage()],
  });

  aiState.update({
    ...aiState.get(),
    messages: [...aiState.get().messages, botMessage()],
  });

  aiState.update({
    ...aiState.get(),
    messages: [...aiState.get().messages, userMessage()],
  });

  aiState.done({
    ...aiState.get(),
    messages: [...aiState.get().messages, botMessage()],
  });

  console.log("\nafter:\n", aiState.get());
}

export const AI = createAI({
  actions: { submitUserMessage },
  onSetAIState: async ({ state, done }) => {
    "use server";
  },
});
