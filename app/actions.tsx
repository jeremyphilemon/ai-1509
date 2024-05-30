import { createAI, getMutableAIState } from "ai/rsc";

async function submitUserMessage() {
  "use server";

  const aiState = getMutableAIState();
  console.log(aiState.get());

  aiState.update((aiState) => ({
    ...aiState,
    messages: [...aiState.messages, 1],
  }));
  console.log(aiState.get());

  aiState.update((aiState) => ({
    ...aiState,
    messages: [...aiState.messages, 2],
  }));
  console.log(aiState.get());

  aiState.update((aiState) => ({
    ...aiState,
    messages: [...aiState.messages, 3],
  }));
  console.log(aiState.get());

  aiState.done((aiState) => ({
    ...aiState,
    messages: [...aiState.messages, "x"],
  }));

  console.log(aiState.get());
}

export const AI = createAI({
  actions: { submitUserMessage },
  onSetAIState: async ({ state, done }) => {
    "use server";

    if (done) {
      console.log("done", state);
    }
  },
});
