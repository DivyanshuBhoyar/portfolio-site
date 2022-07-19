---
layout: '@/templates/BasePost.astro'
title: API Schema validation in Express
description: Easily validate API schema in an express middleware.
pubDate: 2022-07-19T06:52:42.065Z
imgSrc: '/assets/images/image-post5.jpeg'
imgAlt: 'Image post 5'
---

Just came across this nice little library called as `express validator`. Makes dealing with API schema easy, right where the endpoint is defined.

```typescript
import { body, validationResult } from 'express-validator';

app.post(
  '/user',

  body('username').isEmail(),
  body('password').isLength({ min: 5 }),

  (req: Request, res: Response) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(
        {
          errors: errors.array()
        }
      );
    }
    
    // other non -error case logic here
  },
);
```
In case of error, the above code throws a response as 
```json
{
  "errors": [
    {
      "location": "body",
      "msg": "Invalid value",
      "param": "username"
    }
  ]
}
```

#### This is extremely helpful and fast to implement while building all - Express backend.
But however, if we want to normalize our backend error schema, we can easily configure with `CustomError` class which we discussed in my previous blog (*'error handling recipe in express'*).

### Create a CustomError instance :
```typescript
import { ValidationError } from 'express-validator';
import { CustomError } from './custom-error';

export class RequestValidationError extends CustomError {
  statusCode = 400;

  constructor(public errors: ValidationError[]) {
    super('Invalid request parameters');

    // Only because we are extending a built in class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  // Remember, the schema we decided in last blog was
  // {message, field?}[]
  serializeErrors() {
    return this.errors.map(err => {
      return { message: err.msg, field: err.param };
    });
  }
}

```

The library provides access to validation result in `validationResults` function which we will invoke from our special middleware to deal with validation errors.

```typescript
import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { RequestValidationError } from "../errors/request-validation-error";

export const validateRequest = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req); // reported back by express-validtator library

  if (!errors.isEmpty()) {
    throw new RequestValidationError(errors.array());
  }

  next();
};

```

Various other validation function the library provides, include :
```javascript
contains(),// check if value contains the specified value
equals(), //check if value equals the specified value
isAlpha(), isAlphanumeric(), isAscii(), isBase64(), isLength(), isLowercase(), isUppercase()
isBoolean()
isCurrency()
isNumeric(), isDecimal(), isFloat(), isInt(), isIn(), //check if the value is in an array of allowed values
isEmpty()
isFQDN(), //is a fully qualified domain name?
isHash(), isHexColor(), isMobilePhone()
isPostalCode(), isIP(), isLatLong()
isJSON(), isURL()
isWhitelisted(), //checks the input against a whitelist of allowed characters
isAfter(), isBefore(), //check if the entered date is before/after the one you pass

```

### Sanitizing the body
Another major use case of this library is to sanitize the request body.
The sanitization methods are piped just after the validation methods.

```javascript
app.post('/form', [
  check('name').isLength({ min: 3 }).trim().escape(),
  check('email').isEmail().normalizeEmail(),
  check('age').isNumeric().trim().escape()
], (req, res) => {
  //...
  // The request body is santized using trim(), escape(), normalizeEmai()
})
```

These include
```javascript
trim()  // removing wihtespaces
escape() // replaces special characters like <,>, &, / with their HTML entities
blacklist(), whitelist()  // rmv certain chars that appear/ do not appear
toBoolean(), toDate(), toInt() // to force convert into specified type, return null or NaN if unsuccessful
```