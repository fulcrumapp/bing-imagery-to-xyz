# Bing to XYZ

Simple heroku friendly application to proxy requests from Bing QuadKey to the XYZ format.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.

```sh
$ git clone git@github.com:fulcrumapp/bing-imagery-to-xyz.git # or clone your own fork
$ bing-imagery-to-xyz
$ yarn
$ yarn start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

After deploying, view the app URL and use as needed. `https://peaceful-thing-12345.herokuapp.com/{z}/{x}/{y}`
