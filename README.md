# ITCCWebsite
## ReactJS
### Installing on Linux
(If you are running Windows, I would suggest using [this link](https://docs.microsoft.com/en-us/windows/wsl/install-win10) to set up a Linux subsystem on your computer.)

This explains how to install Node.js and NPM. Node.js is a Javascript run-time environment that allow us to execute Javascript code like if we were working on a server. NPM is a package manager for Javascript.

1. Install curl:
`sudo apt-get install curl`

2. Install Node:
`curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -`

3. Install Node.js:
`sudo apt-get install -y nodejs`

At this point, you should be able to type `node -v` and `npm -v` and see their versions.

4. Install build-essential:
`sudo apt-get install -y build-essential`

5. Install React:
`sudo npm install -g create-react-app`

### Testing
Now that everything is installed, you can create a test app. Change into the directory where you want your app to live (e.g. if you are using the linux subsystem and want your app to be on your desktop, you would type `cd /mnt/c/Users/[your username]/Desktop`). Create the app in this folder by typing `create-react-app hello-world`. You can then change into the created directory using `cd hello-world` and start a local server to test your site using `npm start`. Editing the src/App.js file and saving will automatically reload your test web page.

### Development
We will be transitioning the code we currently have to use React and Redux. There is a great tutorial on [freeCodeCamp](https://www.freecodecamp.org/) for both [React](https://learn.freecodecamp.org/front-end-libraries/react) and [Redux](https://learn.freecodecamp.org/front-end-libraries/redux/) as well as [their integration](https://learn.freecodecamp.org/front-end-libraries/react-and-redux/). Aaron has also shared several learning resources:
- https://www.codecademy.com/learn/react-101
- https://www.youtube.com/watch?v=-AbaV3nrw6E&list=PL6gx4Cwl9DGBuKtLgPR_zWYnrwv-JllpA
- https://hackr.io/tutorials/learn-redux
- https://reactjs.org/

Please go through these to learn or refresh your knowledge if you have used React in the past. Soon, I will be adding tasks to manage the transition from the code we currently have to using React.

## Redux
In order to use Redux to manage the state of your React App, you must install the required packages using the following commands:
* `npm i ajv`
* `npm i redux`
* `npm i react-redux`
* `npm i redux-thunk`

## Bootstrap
In order to get bootstrap to work we have to install the required packages:
* `npm i popper.js`
* `npm i dom-helpers`
* `sudo npm i jquery`
* `npm i react-bootstrap`
* `npm i bootstrap`

## Other 
* `npm i react-scroll-up-button` for scroll up button
