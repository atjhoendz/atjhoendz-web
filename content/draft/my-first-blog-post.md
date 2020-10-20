---
title: My First Blog Post
description: This is description of my first blog post
author:
  name: Moh Achun Armando
  bio: Story of code by atjhoendz
---

Empower your NuxtJS application with `@nuxtjs/content` module: write in a `content/` directory and fetch your Markdown, JSON, YAML and CSV files through a MongoDB like API, acting as a **Git-based Headless CMS**.

## Writing content

Learn how to write your `content/`, supporting Markdown, YAML, CSV and JSON: https://content.nuxtjs.org/writing.

## Fetching content

Learn how to fetch your content with `$content`: https://content.nuxtjs.org/fetching.

## Displaying content

Learn how to display your Markdown content with the `<nuxt-content>` component directly in your template: https://content.nuxtjs.org/displaying.

```javascript{1,3-5}[server.js]
console.log('halo')

export default {
  name: 'myComponent',
}
```

<info-box>
  <template #info-box>
    This is a vue component inside markdown using slots
  </template>
</info-box>
