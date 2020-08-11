const { ApolloServer } = require("apollo-server");
const graphql = require("graphql-tag");
const mongoose = require("mongoose");
const Post = require("./modals/Post.js");
const { MONGODB } = require("./config.js");

const typeDefs = graphql`
  type Post {
    id: ID!
    body: String!
    createdAt: String!
    username: String!
  }
  type Query {
    getPosts: [Post]
  }
`;

const resolvers = {
  Query: {
    async getPosts() {
      try {
        const posts = await Post.find();
        return posts;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(MONGODB, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB Connected");
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`Server is running at ${res.url}`);
  });
