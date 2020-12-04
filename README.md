# Atul demo app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). This is intended to provide a quick and dirty way to provision an instance via a single URL.

This app only exposes 2 endpoints:
  * `/home`, the default react-app page
  * `/provision`, which initiates a Ezra session and creates an instance
    * this expects an `element` parameter to do anything
    * i.e. http://localhost:3000/provision?element=quickbooks
    * or deployed: https://atul-ezra-demo.vercel.app/provision?element=quickbooks

> Note: this is currently connected to atul@cloud-elements.com on staging

## Installation, etc

> Refer to src/README.md