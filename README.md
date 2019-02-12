## React_QL

This is a simple fullstack app

##### Frontend

React - the library for UI
Apollo Client

##### Backend

Nodejs(Express) App .
Graphql Server

##### Database

Mongo db - mlab (As choice of database)

##### Graphiql

The dummy frontend app used to test our queries

#### Session One

App Reorganising

#### Session Two

**Backend** - Creating the Schema to describe how the data on the graph will look.
To create an object types using

```js
new GraphQLObjectType();
```

Created the MovieType
For object types example syntax - with the type definitions

```js
const MovieType = new GraphQLObjectType({
  name: 'Movie',
  fields: () => ({
    name: {
      type: GraphQlString,
    },
    id: {
      type: GraphQlInt,
    },
    released: {
      type: GraphQlBoolean,
    },
  }),
});
```

And for a RootQuery - this is a way of jumping into the graph

```js
const RootQuery = new GraphQlObjectType({
  name: 'RootQueryType', // This is the name that will appear in the graphiql ui
  // For a root query ,the fields key returns a value of an object where we describe the field which is an object too with a type  to reference the ObjectType(Schema), the args - the possible args that will be passed with the query.
  // And a resolve function with two args, the parent and args - this is where we could filter thru the data to be returned by the query basically it look at the data and returns whats needed
  fields: {
    movie: {
      type: MovieType,
      args: {
        id: {
          type: GraphQLID, // This is will allow for id in the query to be either a string or interger
        },
        resolve(parent, args) {
          // The Parent value id used for Type Relations
          // We have access to the id -> via args.id
          data.find(item => item.id === args.id);
        },
      },
    },
  },
});
```

#### Session Three

**(Type Relations)** - This is away of relating two types or more on a graph

> Lets say we have a Movie and a Director Type -
> we could use ids - and the parent arg from the resolve function in the RootQuery
> This way the Movie is related to the director object.

```js
const MovieType = new GraphQLObjectType({
  name: 'Movie',
  fields: () => ({
    title:{
      type: GraphQlString
    }
    director: {
      type: DirectorType,
      resolve(parent, args) {
      // We cant query another object type in the graph by using an arg / map key ie;
      // console.log(parent)
        return directors.find(item => item.id === parent.directorId);
      },
  }),
});
```

> In the Object Types (MovieType, DirectorType) we wrap the fields in a function,
> since the file runs from top to bottom,the function runs and the file will be aware of the fields we defined
> by the time we excute the query it will be aware of every field.otherwise the UI will give us a `TypeError:Failed to fetch`

**Lists** using GraphQLList in our RootQuery Under the fields

```js
const RootQuery = new GraphQlObjectType({
  name: 'RootQueryType',
  fields: {
    movie: {
      type: MovieType,
      args: {
        id: {
          type: GraphQLID, // This is will allow for id in the query to be either a string or interger
        },
        resolve: (parent, args) => data.find(item => item.id === args.id),
      },
    },
    movies: {
      type: new GraphQLList(MovieType),
      resolve: () => movies,
    },
  },
});
```

#### Session Four

**Database**

> Mlab to host the mongodb instance.
> Mongoose a package to interact with the db.
> Created a model and schema.

**Mutations**

> This is almost the same as creating a RootQuery
> We can capture the data using the args and resolve the data
> The `save()` function is special to mongoose ( basically saves data to the hosted mongodb).
> `return movie.save()` gives access to the saved data

```js
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    // ADD MOVIE MUTATION
    addMovie: {
      type: MovieType,
      args: {
        title: {
          type: GraphQLString,
        },
        year: {
          type: GraphQLString,
        },
        genre: {
          type: GraphQLString,
        },
      },
      resolve(parent, args) {
        const movie = new Movies({
          title: args.title,
          year: args.year,
          genre: args.genre,
        });

        return movie.save();
      },
    },
  }),
});
```

> Used cors middleware

#### Session Five

**Frontend** - Apollo Client and React

> React - for ui
> Apollo Client - Help interact with GraphQl (fetching data)
