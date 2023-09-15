import React from "react";
import {Button, Form, Dropdown} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";


const GenLyrics = () => {

    const navigate = useNavigate();


    const navGenSong = () => {
        // call API
      navigate('/generateSong/song');
    }
    const regenerateLyrics = () => {
        // call API
    }

    return(  
    <div> 

      <h3>Edit lyrics and select "Generate Song"</h3>
      <Form>
      <Form.Group className="mb-3" controlId="songRCorp.lyrics">
        <Form.Label>lyrics</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>

    
      <Button onClick={regenerateLyrics}>Regenerate Lyrics</Button>
      <Button>Clear All</Button>
      <Button type='submit' onClick={navGenSong}>Generate Song</Button>


      </Form>
    </div>
    );
}

export default GenLyrics;