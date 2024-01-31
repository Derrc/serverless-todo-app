# serverless-todo-app

Simple serverless todo app hosted using AWS S3, Lambda, API Gateway, and DynamoDB. Frontend written in React and Typescript.

[website](https://serverless-todo-app-1220.s3.amazonaws.com/index.html)

**S3**: host static website

**Lambda**: lambda functions for CRUD operations (getting/adding/updating/deleting todos)

**API Gateway**: hosts endpoints that act as a proxy and call respective lambda function

**DynamoDB**: hosts table that stores todo items
