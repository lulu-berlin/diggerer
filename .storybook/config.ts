import { configure } from "@storybook/react";

// automatically import all files ending in *.stories.js or *.stories.tsx
const req = require.context("../src", true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
