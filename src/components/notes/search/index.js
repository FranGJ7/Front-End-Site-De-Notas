import React, { useState } from 'react';
import { Form } from "react-bootstrap";

function Search(props) {
    const [query, setQuery] = useState("")

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            props.searchNotes(query)
        }
    } 

    return (
        <>
          <Form.Group>
            <Form.Label >
                <Form.Control
                    type="text"
                    name={query}
                    value={query}
                    placeholder="Buscar nota..."
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown} />
            </Form.Label>
            </Form.Group> 
        </>
    )
}

export default Search;