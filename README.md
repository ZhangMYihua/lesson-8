## Lesson-8

Starting our sign in section by creating a new sign in and sign up page, as well as start creating sign in component.

# How to fork and clone

One quick note about cloning this project. If you wish to make commits and push the code up after cloning this repo, you should fork the project first. In order to own your own copy of this repository, you have to fork it so you get your own copy on your own profile!

You can see the fork button in the top right corner of every GitHub project; click it and a copy of the project will be added to your GitHub profile under the same name as the original project.

![alt text](https://i.ibb.co/1YN7SJ6/Screen-Shot-2019-07-01-at-2-02-40-AM.png "image to fork button")

After forking the project, simply clone it the way you would from the new forked project in your own GitHub repository and you can commit and push to it freely!


# After you fork and clone:

## Install dependencies

In your terminal after you clone your project down, remember to run either `yarn` or `npm install` to build all the dependencies in the project.


## udemy course complete-react-developer-zero-to-mastery
https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/15037564#overview

## Deploying to netlify
Netlify is now using node 16.x by default, which is incompatible with node-sass and other dependencies.

You can force a node version on your Netlify environment by going to "Deploy Settings" > "Environment" > "Edit variables" and by adding NODE_VERSION = [version number] (for example 14 to run node latest 14.x).

See https://docs.netlify.com/configure-builds/manage-dependencies/.

## Demo
https://react-ztm.netlify.app
