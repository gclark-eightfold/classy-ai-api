# Instructions

1. Copy the `.env.example` file to `.env` and replace the `OPENAI_API_KEY` with your OpenAI API key.

```bash
cp .env.example .env
```

2. Install the dependencies

```bash
npm install
```

3. Generate the Tools File (/dist/tools.ts)

```bash
npm run build
```

4. Run the AI Test Script (/src/test.ts)

```bash
npm run test
```

Edit the `/src/test.ts` file as needed to test different scenarios.
