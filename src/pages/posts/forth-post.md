---
layout: '@/templates/BasePost.astro'
title: Robust custom error-handler middleware recipe
description: Learn how to define standardized custom error schema, using OOPs in Typescript.
pubDate: 2022-07-18T06:52:42.065Z
imgSrc: '/assets/images/image-post3.jpeg'
imgAlt: 'Image post 3'
---

Communicating errors is one of the most important feature almost every API MUST handle. Some backend frameworks may have inbuilt error types and schemas ready to use out of the box, some may not.<br> A standardized schema has to be mutually agreed upon by the different consumers and internal services for an API. Even if there's a simple way to implement it using say, Framework-X, its not necessary all other services will be built using the same framework.<br>
A degree of customization in error communication is hence always essential in any backend architecture.

While learning about usage of Typescript in Nodejs, I learnt how we can apply OOPs principles to devise a pattern to deal with errors. This can be done using Javascript too, but using Typescript guides us with smart autosuggestions wherever we create instances.<br>
This advantage really pays off the initial efforts we put to build such custom thing.

### Lets say we have decided the error response should look like :
```json
[
  {
    "message" : "some text1 here",
    "field"  :  "some field1 here, optional"
  },
    {
    "message" : "some text2 here",
    "field"  :  "some field2 here, optional"
  }
  // ....
]
```

### Start by defining a abstract CustomError class. It defines the blueprint for any subclass implementing it.

```typescript
export abstract class CustomError extends Error {
  abstract statusCode: number;

  constructor(message: string) {
    super(message); // pass this to native 'Error' class in JS

    Object.setPrototypeOf(this, CustomError.prototype);
  }
  // returns array of type (message, field?)[]
  abstract serializeErrors(): { message: string; field?: string }[];
}

```

### Using this abstract class, lets derive a class for each specific error type.
```typescript
import { CustomError } from './custom-error';

// DB related error
export class DatabaseConnectionError extends CustomError {
  statusCode = 500;
  reason = 'Error connecting to database';

  constructor() {
    super('Error connecting to db');

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}

// Not authorized error
export class NotAuthorizedError extends CustomError {
  statusCode = 401;

  constructor() {
    super('Not Authorized');

    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }

  serializeErrors() {
    return [{ message: 'Not authorized' }];
  }
}

```

Since the base CustomError and derived class are now defined, the nice and  final step remains.
## Create an Express middleware to intercept errors
```typescript
import { Request, Response, NextFunction } from "express";
import { CustomError } from "../errors/custom-error";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // if this is user-defined recognized error, as 'CustomError ' class
  // we can use its methods and attributes to serialize return msg
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  // unrecognized error; send generic error message
  console.error(err);
  res.status(400).send({
    errors: [{ message: "Something went wrong" }],
  });
};

```

This first seems little extra work for sure, especially for such simple errors, however as the complexity grows, we wont have to remember what our error message are supposed to look like, their properties etc.
#### Next time start with `class NewError extends CustomError` and let typescript intellisense guide the way to you. 😌

<img src="https://c.tenor.com/op-k2N_iOYIAAAAM/smooth-corey-vidal.gif"  />