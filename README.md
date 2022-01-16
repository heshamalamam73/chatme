# Create Amplify aws serverless app with react typeScrypt

## create react app and configure aws amplify service in vscode

npx create-react-app chatme --typescript
cd chatme

## create githup repository and connect it with app

git init
git add .
git branch -M main
git remote add origin https://github.com/heshamalamam73/chatme.git
git push -u origin main

## install the AWS Amplify and AWS Amplify React bindings

npm install --save aws-amplify aws-amplify-react

## init amplify in this app

amplify init
select your app name and type some info about it like editor you use and appType and src path and npm commands
you well be asked about your account inf about
you well need to generate IAM user and gave them some permissions like AdministratorAccessAmplify
you will be asked about your access token id and secret kay
after finish un file will be generated with aws-exports.js that will contain all aws amplify configuration

## test the app

yarn start or npm start

## connect amplify app with githup repository

go to aws account
open amplify apps and select the correct regine
select your app
select hosting environment
select githup
gave the permissions to access githup account
then will be redirected to the amplify console
you should select the correct repository
select the default branch name
you will be asked to generate user and gave it some permissions to access and deploy the back end
after finish will be redirected again into amplify app
start to deploy this app from console

##Create authentication service

amplify add auth

? Do you want to use the default authentication and security configuration? Default configuration
? How do you want users to be able to sign in? Username
? Do you want to configure advanced settings? No, I am done.
copy
To deploy the service, run the push command:
amplify push

## add amplify configuration

open src/index.tsx
add these lines in top
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

## Create login UI

Open src/App.tsx and make the following changes:

import { withAuthenticator } from '@aws-amplify/ui-react'
Change the default export to be the withAuthenticator wrapping the main component:export default withAuthenticator(App)

#
