---
layout: '@/templates/BasePost.astro'
title: A quick intro to GraphQL basics
description: A new API communication standard, flexible but complex under the hood.
pubDate: 2020-02-03T00:00:00Z
imgSrc: '/assets/images/image-post4.jpeg'
imgAlt: 'Image post 4'
---

## What exactly is it ?
*GraphQL is a specification for how to talk to an API. It is designed for HTTP clients to be able to make API calls to fetch exactly the data they need from the APIs.*

It stands for Graph Query Language. It is an API standard similar to REST. The fact that it is defined by an open standard, there is no official implementation of it. A GraphQL implementation can be written with any programming language, integrate with any type of database, and support any client (such as mobile or web applications), as long as it follows the rules outlined in the specs.

## The core: Queries and Mutations
Almost all gql request are either queries or mutations. They are strongly defined in type defination of graphQL server.


### Queries
These are a way to ask for response
```
Request1           Response1

query {          |  {
 user (id: 1) {  |   "user": {
  id             |     "id": 1
 }               |    }
}                |  }

----------------------------------------

Request2:     |  Response2:

query {         |  {
 user (id: 1) { |   "user": {
  id            |    "id": 1
  name          |    "name": "Elmo"
 }              |   }
}               |  }
```

### Mutations
They are the way to change data on the backend, similar to what is achieved by REST post/put/update etc  verbs.
Like queries it also returns an object based on the operation performed.
```graphql
mutation AddNewPet ($name: String!, $petType: PetType) {
  addPet(name: $name, petType: $petType) {
    id
    name
    petType
  }
}
```
Variables
```json
{
  "name": "Rover",
  "petType": "DOG"
}
```
Response
```json
{
  "data": {
    "addPet": {
      "id": 1
      "name": "Rover",
      "petType": "DOG"
    }
  }
}
```
## Type Definition
Before writing logic for any of the queries/ mutations we first have to map all the type of objects, return types, queries etc, in a graphql schema object.
Lets say for a API with `User` and `Posts` may look like:
```graphql
type Post {
    id: ID!
    body: String!
    createdAt: String!
    username: String!
    objectURL: String!
  }
  type User {
    createdAt: String!
    username: String!
    email: String!
    token: String!
    password: String!
  }
  type Query {
    getPosts: [Post]
    getPost(postId: String!): Post!
  }
  type Mutation {
    registerUser(
      username: String!
      email: String!
      password: String!
      confirmPassword: String!
    ): User!
    login(username: String!, password: String!): User!
    createPost(body: String!, objectURL: String!): Post!
    deletePost(postId: ID!): String!
  }
```
*Notice how the types for each entity and relations are clearly defined. All the queries and mutations have type `Query` and `Mutation` respectively. This blueprint also contains the shape of arguments and the return type, as discussed.*

## GraphQL vs REST
While clearly it looks graphql is more flexible, lets look at each point of difference.
- **Over-fetching and Under-fetching** from an API call can be avoided at runtime, w/o changing the API in GraphQL.\ While rest doesn't allow this control.
- **Network fetching** can be reduced by precisely querying only necessary info. While in REST, the entire programmed return type is throw, irrespective of fields actually required.
- Graphql may bring **performance issues** with complex queries. While enabling clients to request exactly what they need, GraphQL query can encounter performance issues if a client asks for too many nested fields at once. \So, to be on the safe side, it might be worth using a REST API for complex queries: Retrieve the data by means of multiple endpoints with fine-tuned, specific queries.
- **Overkill for small applications**: While GraphQL is the right solution for multiple microservices, you’d better go for REST architecture in case of a simple app
- **Error Handling**: Standard HTTP status code aren't supported right way by graphql. It always throws errors with `Status 200` with all errors listed in `errors` property of response. 

#### Thanks for reading.