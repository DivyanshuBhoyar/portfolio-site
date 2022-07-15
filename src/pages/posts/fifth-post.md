---
layout: '@/templates/BasePost.astro'
title: Using Mongoose with Typescript
description: Bring awesomeness of Typescript to Mongo models in Nodejs.
pubDate: 2022-07-15T05:10:26Z
imgSrc: '/assets/images/image-post2.jpeg'
imgAlt: 'Image post 2'
---

Mongoose JS is the most popular Mongodb client library in Nodejs world. And Typescript is one of the finest tools for JS when it comes to DX. It brings type-safety, type inference, that helps in detecting the bugs much early while giving good control.

The most loved part about TS is definitely the autosuggestions is brings while programming. This boosts the speed and we don't need to check jump various files just to check types.

However, the Mongoose library does still rely on older JS code, hence it struggles with typescript. As of writing this article, out of the box TS support hasn't been its feature.

<img src="https://c.tenor.com/TusYHe0TnnwAAAAC/frustrated-big-bang.gif" width="80%" height="40" class = "mx-auto"  />

But the lib allows playing with its own types, and lets devs configure it so that typescript takes control nicely. Lets discuss the steps for modifying mongoose models to obey typescript.<br>
I assume you already know how to create mongoose models in JS. Lets go.

## Step 1: An interface for attributes to be passed to build object of the model.
*Which are generally passed in the*<br> `codeconst myobj = new MyModel({attriX: valX, attriY: valY})` <br>
*part of our JS code*

```typescript
interface TicketAttrs {
  title: string;
  price: number;
  userId: string;
}
```

## Step 2: Interface for all user-defined attributes that will be part any doc of the model.
```typescript
interface TicketDoc extends mongoose.Document {
  title: string;
  price: number;
  userId: string;
  orderId? :string  // not used when instantiating new object
}
```

## Step 3: Add a build() method to the model.
Which accepts args of `TickectAttrs` we defined above.
```typescript
interface TicketModel extends mongoose.Model<TicketDoc> {
  build(attrs: TicketAttrs): TicketDoc;
}
```

## Step 4: Build the schema class in good-old JS way
```javascript
const ticketSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    orderId: {
      type: String,
    },
  }
);
```

## Step 6: Define what `build()` method does
```typescript
ticketSchema.statics.build = (attrs: TicketAttrs) => {
  return new Ticket(attrs);
};
```

## Step 7: Create a model class, with the schema.
Pass the above interfaces as the ***generic types***.
```typescript
const Ticket = mongoose.model<TicketDoc, TicketModel>('Ticket', ticketSchema);
export {Ticket}
```

#### Hence done. Enjoy the TS ✔️ features. 🎉
