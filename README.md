This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

"use client";
import { useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import SimpleImage from "@editorjs/simple-image";
const DEFAULT_INITIAL_DATA = {
time: new Date().getTime(),
blocks: [
{
type: "header",
data: {
text: "This is my awesome editor!",
level: 1,
},
},
],
version: "2.27.2",
};
const page = () => {
const ejInstance = useRef();
const initEditor = () => {
const editor = new EditorJS({
holder: "editorjs",
onReady: () => {
ejInstance.current = editor;
},
autofocus: true,
data: DEFAULT_INITIAL_DATA,
tools: {
header: Header,
list: List,
image: SimpleImage,
},
onChange: async () => {
let content = await editor.saver.save();
console.log(content);
},
});
};
useEffect(() => {
initEditor();
}, []);
return (
<div id="editorjs" ref={ejInstance} className="bg-white text-black"></div>
);
};

export default page;
