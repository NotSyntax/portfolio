# My Portfolio

Built using Pug and Express. Icons are from DEVICON.

# How does it work?

We use Pug to render the dates that I started with a specific language, and use HTML and CSS for everything else!
```js
app.get("/", (request, response) => {
     response.render(__dirname + "/views/index.pug", {
        javascript: moment.duration(moment().diff(new Date('1/19/2019'))).years() + " year, " + moment.duration(moment().diff(new Date('1/19/2019'))).months() + " months",
        java: moment.duration(moment().diff(new Date('09/26/2017'))).years() + " years, " + moment.duration(moment().diff(new Date('09/26/2017'))).months() + " months",
        html: moment.duration(moment().diff(new Date('06/8/2015'))).years() + " years, " + moment.duration(moment().diff(new Date('06/8/2015'))).months() + " months"
     }) 
});
```

For those interested, you can use this HTML for Discord previews.

```html
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
<meta name="description"="" content="Hi! I'm uromastyx, but you may know me as Syntax. This is my portfolio! You can see my accomplishments and my projects." />
<meta name="og:title"="" content="My Portfolio" />
<meta name="og:url"="" content="https://me.uromastyx.xyz" />
<meta name="og:type"="" content="website" />
<meta name="og:site_name"="" content="uromastyx.xyz" />
<meta name="og:image"="" content="https://cdn.glitch.com/be605b26-2c8e-48f2-a540-5f3a2eac2386%2Ffavicon.png?v=1565725140040" />
<meta name="og:description"="" content="Hi! I'm uromastyx, but you may know me as Syntax. This is my portfolio! You can see my accomplishments and my projects." />
<meta name="theme-color" content="#ffd119" />
```
