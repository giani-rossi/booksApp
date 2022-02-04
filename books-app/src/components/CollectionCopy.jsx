import React from "react";
import "../stories/Collection.css";
import Collection from "../stories/Collection";
import { gql, useQuery } from "@apollo/client";
import { Spinner } from "react-bootstrap";

const ALL_DATA = gql`
  query GetUserById {
    getUsers {
      id
      name
      email
      books {
        id
        title
        author
        ISBN
      }
    }
  }
`;

const CollectionCopy = (props) => {
  const { data, loading, error } = useQuery(ALL_DATA);

  const { name, qtybooks, image, children, ...rest } = props;

  error && <p>There is an error</p>;
  console.log(data);
  return (
    <>
      <div className="collection-books-copy">
        {loading ? (
          <Spinner animation="grow" variant="info" />
        ) : (
          data.getUsers.map((item, index) => (
            <Collection
              key={index}
              image={item.image}
              name={item.name}
              qtybooks={item.id}
            />
          ))
        )}
      </div>
    </>
  );
};

export default CollectionCopy;
