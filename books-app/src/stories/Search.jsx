import React from "react";
import "./Search.css";
import { Form, FormControl } from "react-bootstrap";

const Search = (props) => {
    /*
     <svg
     className='search-icon'
       width="16"
       height="16"
       viewBox="0 0 16 16"
       fill="none"
       xmlns="http://www.w3.org/2000/svg"
     >
       <path
         d="M14.75 14.75L11.3855 11.3795L14.75 14.75ZM13.25 6.875C13.25 8.56576 12.5784 10.1873 11.3828 11.3828C10.1873 12.5784 8.56576 13.25 6.875 13.25C5.18424 13.25 3.56274 12.5784 2.36719 11.3828C1.17165 10.1873 0.5 8.56576 0.5 6.875C0.5 5.18424 1.17165 3.56274 2.36719 2.36719C3.56274 1.17165 5.18424 0.5 6.875 0.5C8.56576 0.5 10.1873 1.17165 11.3828 2.36719C12.5784 3.56274 13.25 5.18424 13.25 6.875V6.875Z"
         stroke="black"
         stroke-linecap="round"
       />
     </svg>
     */
  return (
    <div>
        <p className='search-text'>Buscá los libros que tenés:</p>
      <Form className="d-flex" style={{marginLeft:24}}>
        <FormControl
          type="search"
          placeholder="Nombre, autor, ISBN"
          className="search-bar"
          aria-label="Search"
        />
      </Form>
    </div>
  );
};

export default Search;
