# BlackPeach

> You can visit the current version of the site [here](https://blackpeach.vercel.app/), deployed on Vercel.

A full stack E-Commerce platform showcasing music and accessories of a girl group | Developing <br/>

About next UI, sometimes you forgot to decalre use client when using the provided components but the components wouldn't be rendered with out declaring use client in that file. The main problem is that there is no errors shown and it could take you sometimes before figuring out that you just miss declaring use client, which would have been nice if this behavior would generate some error message.
However, it's a good library with well documented for API's props. This allows you to easily customize the components as your will.

Address Dropdown list
The official website had done it so well that I'm curios how they handled it. I got a chance to implement a simplier version during my internship. At the time, it was a dropdown list of countries then if the selected country is Thailand, it will require different set of address with dropdown of suburb then province (using a third party api). But for the official website, they handle so many countries. I think the website made it's own data set for regular shipping address since I don't see any API requesting from the site when I select countries. I'm planing on doing a proper one that handle as many countries as possible.

### Customizing your slider at will with Swipper.js

### Context API vs Redux

Personally, Zustand is another interesting global state management tool to use.

### Classic Redux vs Redux Toolkit

At first, I was tossing props around just to open/close sidebars. But then I reimplemented those features using redux. I'd say it is easier to track the state that way since you don't need to pass through multiple components just to control the state of the sidebars.

With Redux persist, it is super easy to persist stage which you don't need to store and load everything from localStorage by yourself. With a little setup, it'd do the work for you.

Here is all you need to do in order to set Redux Persist up:
Before:
After:
