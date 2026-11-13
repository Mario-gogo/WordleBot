import { expect } from "chai";
import { evaluateGuess } from "../src/game/feedback.js";

describe("**********Wordle evaluateGuess() Feedback Validation**********", function () {
  it("should return correct feedback for a guess", function () {
    const result = evaluateGuess("crane", "crate");

    expect(result).to.equal("🟩🟩🟩⬛🟩");
  });
});
