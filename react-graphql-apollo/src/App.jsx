import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/client";
import PokemonContainer from "./components/PokemonContainer";
import "./App.css";

function App() {
  const client = new ApolloClient({
    url: "http://localhost:3000",
  });
  return (
    <ApolloProvider client={client}>
      <main>
        <PokemonContainer />
      </main>
    </ApolloProvider>
  );
}

export default App;
