"use client";

import { useActions } from "ai/rsc";

export default function Home() {
  const { submitUserMessage } = useActions();

  return (
    <div>
      <div
        className="bg-white"
        onClick={async () => {
          await submitUserMessage();
        }}
      >
        button
      </div>
    </div>
  );
}
