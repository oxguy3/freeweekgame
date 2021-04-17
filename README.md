# freeweekgame

I've got a free week; why not make a video game?

## Requirements

[Node.js](https://nodejs.org) is required to install dependencies and run scripts via `npm`.

## Installing

After cloning the repo, run `npm install` from your project directory. Then, you can start the local development server by running `npm start`.

After starting the development server with `npm start`, you can edit any files in the `src` folder and webpack will automatically recompile and reload your server (available at `http://localhost:8080` by default).

## Deploying

After you run the `npm run build` command, your code will be built into a single bundle located at `dist/bundle.min.js` along with any other assets you project depended.

If you put the contents of the `dist` folder in a publicly-accessible location (say something like `http://mycoolserver.com`), you should be able to open `http://mycoolserver.com/index.html` and play your game.

## License
MIT License, see LICENSE files

Forked from [phaser3-project-template](https://github.com/photonstorm/phaser3-project-template). MIT License, Copyright (c) 2017 Richard Davey
