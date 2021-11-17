# react-private-messaging

> A messaging app in React using [socket.io](https://socket.io/).

## What I used?

-   [Express](http://expressjs.com/)
-   [React](https://reactjs.org/)
-   [React Redux](https://react-redux.js.org/)
-   [Socket.io](https://socket.io/)
-   [Storybook](https://storybook.js.org/)
-   [TypeScript](https://www.typescriptlang.org/)

## How to use

Create a username and click the Join button on the home page.

When you join, your username is stored in your local browser. If you try to join on another browser or another device with the same username, it will not work. That's why you don't need a password (as long as your device is secure).

To chat with someone, create a new room and then click the Invite Others button to share the link.

When someone visits your link, they will be asked to create a username (if it has not been already created) and then they will be able to chat with you.

No messages are persisted on the server. Therefore, users can only see messages that are exchanged when they are online.

If you sign out, it will not be possible to use your previous username again.

## See it working

-   Open the [website](https://react-private-messaging.herokuapp.com/).
-   Open the [Storybook](https://607c4a493059ff0021f3ab03-bctzuxaxyq.chromatic.com).

## Local setup

### Install dependencies

```
npm install
```

### Launch client app

```
npm run client-start
```

### Launch server app

```
npm run serve
```

### Launch Storybook

```
npm run storybook
```
