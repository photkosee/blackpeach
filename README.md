<p align="center">
  <a href="https://blackpeach.vercel.app/">
    <img width="270" src="./public/images/full_logo.png">
  </a>
</p>
<p align="center">An E-Commerce platform showcasing music and accessories of a famous K-Pop group. <a href="https://blackpeach.vercel.app/">Shop now!</a></p>

### Table of Contents

1. [Inspiration](#inspiration)
2. [What this does?](#what-this-does)
3. [Features](#features)
4. [Built with](#built-with)
5. [Reflections](#reflections)
6. [Further Improvements](#further-improvements)
7. [Author](#author)
8. [Deployment](#deployment)
9. [Contributing](#contributing)

## Inspiration

I'm really excited about this: with Blackpink possibly disbanding, I decided to channel that energy into something positive. So, I came up with the idea of building an e-commerce site with their theme (the design is from the official shop itself). It's a chance for me to learn new skills, like Redux, which I've been curious about but never had the chance to dive into. Until now, I've mostly worked with the Context API, so this is a great opportunity to broaden my web development knowledge.

## What this does?

This is a common e-commerce platform that allows users to view product details and add items to their cart before checking out. The platform features a theme inspired by a famous K-Pop girl group.

## Features

- Product slices
- Dynamic routes for each product
- Payment/checkout flow
- Cart
- Data persistence when refreshing/mounting the page

## Built with

- [Next.js 14](https://nextjs.org/) - Development environment
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Next UI](https://nextui.org/) - Components library for User Interface
- [Redux Toolkit](https://redux-toolkit.js.org/) - State management tool
- [Redux Persist](https://github.com/rt2zz/redux-persist) - Persist state in a Redux store


## Reflections

### Persisting your states with Redux Persist

I totally agree that Redux isn't as intimidating as it might seem (with [Redux Toolkit](https://redux-toolkit.js.org/)), especially when compared to the Context API. You can have a look at how I prepare Context API in those files with the name "Context" in it since I didn't remove those files, with my custom `useLocalStorage` hook. However, what really makes Redux shine for me is [Redux persist](https://github.com/rt2zz/redux-persist).

Redux persist simplifies the process of persisting state. You don't have to worry about manually storing and loading everything from localStorage; with just a bit of setup, it handles it all so well. It's like having a reliable assistant taking care of the tedious tasks for you.

Here is all I needed to do in order to set Redux Persist up (at `store.ts`): <br>
Before:<br>

```
const store = configureStore({
  reducer: {
    cart: cartSlice,
    sidebar: sidebarSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
```

After:

```
const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  bp_cart: cartSlice,
  bp_sidebar: sidebarSlice,
  bp_address: addressSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export default store;
```

Then wraping an extra Provider layer:

```
<PersistGate loading={null} persistor={persistor}>
  {children}
</PersistGate>
```

### Dynamic routes in Next.js

I'd say setting dynamic routes in React.js is not a big task. However, when you can simply do it by structuring your files in Next.js, this makes it so easy to manage. All you need to do is creating a folder with a `[]` wraping the name of the route, and that's it.

For this project, have a look at `/app/products/[name]`.

### Next UI case study

Sometimes I forget to put in a "use client" when I'm messing around with components from the Next UI library. It's annoying because there's no heads-up about it, so I end up scratching my head for a while trying to figure out what went wrong. It'd be cool if they could throw in an error message for that.

Anyway, despite that little hiccup, the library itself is pretty solid. The documentation is decent, especially for the APIs and props. It makes tweaking the components to fit what I need super easy, which is a big plus.

### Customizing your slider at will with Swipper.js

With the help of `useRef`, it is so simple to customize your slider the way you like. An example in my code base at `/app/components/Swiper.tsx`

## Further Improvements

About address form, I'm impressed by how well the official website manages it. During one of my internships, I worked on a simpler version with dropdowns for countries and specific requirements (Suburbs and Provinces) for places like Thailand. However, the official site are able to handle most of the countries. However, the official site seems to have its own system in place—no visible API requests.

I found this [Countries States Cities Database](https://github.com/dr5hn/countries-states-cities-database?tab=readme-ov-file) API which is quite convenience. However, the API is not able to determince whether that specific country has got states. It simply put possible Suburbs or Provinces as States and Cities.

Testing is also a good idea. It might not be necessary for all components but it'll be useful for those components which are requesting for an API.

## Author
Phot Koseekrainiramon
- [LinkedIn](https://www.linkedin.com/in/phot-kosee/)
- [GitHub](https://github.com/photkosee)

## Deployment

This project is deployed to Vercel:

[https://blackpeach.vercel.app/](https://blackpeach.vercel.app/)

## Contributing

Pull requests are welcome. Please open an issue first to discuss what'd you like to improve.

### Log

- 21/04/2024 Image optimization
