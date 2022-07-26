# StackApps - MERN- Test-1-2

## What is this?

[StackApps](https://github.com/harnessapps) strives to reflect modern best practices, but it's _goal_ isn't to educate you on how to write an application with any given stack. Instead, StackApps is the very simplest example of an application requiring multiple layers so that you (developers) can learn how to deploy a given stack using [Harness.io](https://harness.io)

Modern application stacks can be described very much like a layer cake. Each layer describing a different piece of the system overall. The StackApps project exists to provide sample application code written in a variety of 'stacks'. This repository holds the StackApps example for the MERN, or Mongo, Express, React and Node stack.

## This StackApps app uses:

- [MongoDb](https://mongodb.com) for data persistence
- [Express](https://expressjs.com) as the backend server framework
- [React](https://reactjs.com) as the frontend framework
- [Node](https://nodejs.org) as the server-side Javascript implementation.

## Manual installation

1. After cloning this repository, cd to the 'server' directory and then run the following command to install the dependencies:

```
yarn install
```

2. cd to the 'client' directory and then run the following command to install the dependencies:

```
yarn install
```

3. create a `config.env` file in the server directory.

   - Your config.env file should contain the following variables:
     - `ATLAS_URI=<your-atlas-uri>` - this will look something like this: `mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/test?retryWrites=true&w=majority`
     - `PORT=<your-port>` - this will look something like: `5001` - 5001 is the default, and if you want to change this, be sure to also change the port in `client/src/buildEnv.js`

4. Once configured, you can run the server by running the following command from the server directory:

```
yarn start
```

5. Once the server is started, you can run the client by running the following command from the client directory:

```
yarn start
```

6. At this point you'll have a locally running server and client open in your browser.
