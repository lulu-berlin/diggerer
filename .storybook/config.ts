import { configure } from "@storybook/react";

// automatically import all files ending in *.stories.js or *.stories.tsx
const req = require.context("../src", true, /\.stories\.(tsx|js)$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
