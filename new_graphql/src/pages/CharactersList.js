import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

function CharactersList() {
  const {error,data,loading} = useQuery(GET_CHARACTERS);

  console.log(data)
  if(loading){
    return <div>Loading...</div>
  }
  return <div>CharactersList</div>;
}

export default CharactersList;
