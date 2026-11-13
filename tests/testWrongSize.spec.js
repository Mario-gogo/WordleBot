import { expect } from "chai";

// Mock Discord message
function createMockMessage(content) {
  return {
    content,
    reply: async function (response) {
      this.replyMessage = response;
      return response;
    },
  };
}

describe("**********Verify blank inputs**********", () => {

  it("should reply with an error since word is too short", async () => {
    const message = createMockMessage("!guess pain");

    const args = message.content.trim().split(/\s+/);
    const guess = args[1]?.toLowerCase();

    if (!guess?.trim() || guess.length !== 5) {
      await message.reply(
        "Please provide a valid 5-letter word guess (e.g., `!guess CRANE`)."
      );
    }

    expect(message.replyMessage).to.exist;
  });

  it("responds if word too long", async () => {
    const message = createMockMessage("!guess insane");

    const args = message.content.trim().split(/\s+/);
    const guess = args[1]?.toLowerCase();

    if (!guess?.trim() || guess.length !== 5) {
      await message.reply(
        "Please provide a valid 5-letter word guess (e.g., `!guess CRANE`)."
      );
    }

    expect(message.replyMessage).to.exist;
  });

});
