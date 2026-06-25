# Suno Prompt Rapidfire Checker

A tiny static checker for spotting Suno prompt terms that may increase the chance of unwanted vocal chops, rhythm slicing, stutter edits, or rapid "따발총" patterns.

Open `index.html` through any static server. The checker runs entirely in the browser and does not send prompts anywhere.

## Local Preview

```bash
python3 -m http.server 8787
```

Then open `http://127.0.0.1:8787/`.

## Test

```bash
node --test rules.test.mjs
```

