"use client";

import { useAIState, useActions } from "ai/rsc";

export default function Home() {
  const { submitUserMessage } = useActions();
  const [aiState] = useAIState();

  console.log(aiState);

  return (
    <div>
      <div
        className="bg-zinc-100 p-2"
        onClick={async () => {
          await submitUserMessage();
        }}
      >
        click here
      </div>
    </div>
  );
}
