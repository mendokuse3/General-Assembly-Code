# Express Extras

## Lesson Objectives

1. Use nodemon to restart your server when your code changes
1. Save a record of what packages your application uses

## Use nodemon to restart your sever when your code changes

An NPM package called `nodemon` allows us to run code just like `node`, but it will restart the application whenever code in the application's directory is changed. This is really handy and gives us a better workflow.

1. Install it `npm install nodemon -g`
    - the `-g` tells npm to make the package available for use in the terminal in any directory (globally). You might not be able to install node packages globally by default. You may have to run `sudo npm i nodemon -g` and enter your computer's username and password
1. Now we can call `nodemon server.js`, and the server will restart whenever the app's code changes

1. If you want to get really fancy, you can go to your `package.json` file and change the value of `main` from `index.js` to `server.js` - now you can just type `nodemon` in terminal and it will 'know' you mean to run `server.js`

When you start a new project and do `npm init` and go through the prompts, you can set this right away.


## package.json and node_modules revisited

When we downloaded express it installed a lot of code (inside `node_modules`) - we don't need to track these files and upload/download them to and from github. All the info needed is in the `package.json`

To avoid tracking/uploading/downloading files that don't need to be tracked or shouldn't be tracked (passwords, secrets) you can create a file called `.gitignore`

It will ignore whatever files and folders you tell it. Our class repository already has a `.gitignore`, but when you start your own projects, you'll want to be sure to create one.

Let's give it a whirl:


1. Create a file called `.gitignore`
1. In it, add the line `node_modules`
1. You can check to see if it works by going to `github` if you see your `node_modules` folders there, you have not properly ignored your `node_modules`
1. note, our class repo already has a `.gitignore`, so you really should never see `node_modules` there
1. At first, it won't matter if you ignore  your node modules. But once you go to host your server on the web, having these tracked can cause weird errors and make your server break. We'll talk about this more later.
