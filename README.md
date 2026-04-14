# Nisa Engineering Challenge: The Quality Gap

Welcome! At Nisa, we believe quality is infrastructure, not an afterthought. We don't care if you can recite testing theory from a textbook. We care if you can look at a real feature, figure out where it's fragile, and make it bulletproof.

## The Scenario

You've just joined the team. A developer shipped this **Lesson Plan Generator** prototype quickly to hit a demo deadline. It works… mostly. But it shipped with zero test coverage and a "we'll add tests later" promise. Later is now.

Users are starting to report that "something feels off" but nobody has been specific. Your job is to find out what's wrong, document it, and start building the quality layer this feature needs.

## Your Mission (Timebox: 2–3 hours max)

We don't expect perfection. We expect you to think like someone who **owns quality** for this feature.

## Getting Started

```bash
# Install dependencies
pnpm install

# Run the development server
pnpm dev

# Run the existing test (just one placeholder)
pnpm test:e2e
```

> **Note:** No API keys are needed. The AI endpoint is mocked — it streams realistic lesson plan content without calling any external service. The mock simulates realistic behavior, including error conditions.

## Acceptance Criteria

Here's what this feature is supposed to do. Whether it actually does all of this reliably is for you to find out.

1. A user can type a lesson plan topic into the input field and submit it (via button click or pressing Enter).
2. After submitting, the user's message appears in the chat and an AI-generated lesson plan streams in token by token.
3. While a response is generating, the UI should indicate that it's loading and prevent the user from sending additional messages.
4. The chat auto-scrolls as new content streams in, but does not interrupt the user if they've scrolled up to read earlier content.
5. If something goes wrong (e.g., a server error), the user should see clear feedback and be able to try again.
6. Messages always appear in the correct order: user message, then assistant response.
7. The input field does not accept empty or whitespace-only submissions.

## Your Tasks

### Task 1: Explore & Document

**The Goal:** Put yourself in the shoes of a user and a QA engineer. Use the acceptance criteria above as your guide, but don't stop there. Click around. Try to break things. Think about what a real teacher using this tool might do.

**What we want to see:**

- A thorough manual exploration of the feature — the happy paths and the unhappy ones.
- A **`BUGS.md`** file in the repo root documenting every issue you find. For each bug, include:
  - What the bug is (clear title).
  - Steps to reproduce.
  - Expected vs. actual behavior.
  - Severity you'd assign (Critical / High / Medium / Low) and why.
- A prioritized recommendation: if the team can only fix **two** of these before the next release, which two and why?

> This is the most important task. We want to see how you **think about quality**, not just whether you can write code. A great `BUGS.md` with clear thinking is worth more than a mediocre test suite.

### Task 2: Write the Test Suite

**The Goal:** Now that you've explored the feature, codify what you've learned into automated tests. Write Playwright E2E tests that would catch the issues you found — and protect against future regressions.

**Guidelines:**

- The repo includes one placeholder test. Replace it with your suite.
- Cover the core happy path and the most important failure modes you discovered.
- **Do NOT use `page.waitForTimeout()` or any hard sleeps.** Use proper Playwright assertions and locator methods. Tests should pass reliably on slow machines.
- We'd rather see 5 thoughtful, well-structured tests than 15 shallow ones. Quality over quantity.
- Not every bug can be easily caught with an E2E test — that's fine. Call out in your `BUGS.md` which issues you chose to automate and which you'd catch through other means (manual QA, unit tests, monitoring, etc.).

### Task 3: Fix & Verify

**The Goal:** Pick the bug you think is most impactful to a real user. Fix it. Then make sure your test suite proves the fix works.

We want to see the full loop: **failing test → code fix → passing test**.

- You only need to fix one bug. The rest stay documented in `BUGS.md`.
- Explain why you chose this bug to fix first — what's your reasoning about user impact?

## A Note on AI Tools

You may use AI assistants (ChatGPT, Copilot, Claude, etc.) freely — we use them too. What we're evaluating is not whether you typed every character, but whether you **understand what the code does and can explain your decisions**. The Loom recording is where that shows.

## How to Submit

1. Clone this repo (do not fork).
2. Make your changes on a new branch.
3. Record a **< 5 minute Loom video** (or any screen recording) walking us through:
   - Your exploration process: how did you approach testing this feature? What did you try?
   - The bugs you found and how you'd prioritize them.
   - Your test suite: what you chose to automate and why.
   - Your fix: why you chose that bug, how you fixed it, and the passing test.
4. Email us the link to your repo and the video.

## Evaluation Criteria

| Criteria | What we're looking for |
|---|---|
| **Exploratory Testing** | Did you find issues beyond the obvious? Does your `BUGS.md` show systematic thinking — not just "I clicked around and found a thing"? Did you consider edge cases, error states, and real user behavior? |
| **Bug Documentation** | Are your bug reports clear, reproducible, and well-prioritized? Would a developer be able to fix each issue from your description alone? |
| **Test Quality** | Are your automated tests meaningful and well-structured? Do they cover failure paths, not just happy paths? Would they catch real regressions? |
| **Code Quality** | Is the fix clean and focused? Did you introduce new problems while solving one? |
| **Communication** | Can you clearly walk us through your exploration process, testing strategy, and technical decisions in the video? |

## Tech Stack

- **Framework:** Next.js (App Router)
- **AI SDK:** Vercel AI SDK (`ai` + `@ai-sdk/react`)
- **Styling:** Tailwind CSS
- **Testing:** Playwright
- **Icons:** Lucide React

## Project Structure

```
src/
  app/
    api/chat/route.ts      ← Mock streaming AI endpoint
    layout.tsx              ← Root layout
    page.tsx                ← Main page (renders Chat)
    globals.css             ← Global styles
  components/
    chat.tsx                ← Chat component (input + orchestration)
    message-list.tsx        ← Message list (scroll behavior)
    message-bubble.tsx      ← Individual message rendering
tests/
  lesson-plan.spec.ts      ← Placeholder test (replace this!)
```

Good luck! We're looking forward to seeing how you think about quality.
