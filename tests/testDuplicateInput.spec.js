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

describe("**********Duplicate Guess**********", () => {
  it("should reject a guess that has already been submitted", async () => {
    const guessedWords = new Set();
    const message = createMockMessage("!guess crane");

    const args = message.content.trim().split(/\s+/);
    const guess = args[1]?.toLowerCase();

    // First guess
    if (guessedWords.has(guess)) {
      await message.reply("You already guessed that!");
    } else {
      guessedWords.add(guess);
    }

    // Second guess
    if (guessedWords.has(guess)) {
      await message.reply("You already guessed that!");
    } else {
      guessedWords.add(guess);
    }

    expect(guessedWords.size).to.equal(1);

    expect(message.replyMessage).to.equal(
      "You already guessed that!"
    );
  });

  it("should accept different words as guesses", () => {
    const guessedWords = new Set();

    guessedWords.add("crane");

    const guess = "stare";

    expect(guessedWords.has(guess)).to.be.false;

    guessedWords.add(guess);

    expect(guessedWords.size).to.equal(2);
  });
});
