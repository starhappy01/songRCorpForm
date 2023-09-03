import React, {useState, useRef} from 'react';
import {useNavigate} from 'react-router';
import { FormControl, Select, Input, Button, FormLabel } from '@chakra-ui/react'



const Home = () => {

  const [uploadedFileName, setUploadedFileName] = useState(null);
  const [recipient, setRecipient] = useState("");
  const [gender, setGender] = useState("");
  const [occasion, setOccasion] = useState("");
  const [manager, setManager] = useState("");
  const [team, setTeam] = useState("");
  const [genre, setGenre] = useState("");
  const [singer, setSinger] = useState("");

  const inputRef = useRef(null);
  const navigate = useNavigate();


  const navGenerateSong = () => {
    // call API
    navigate('/generateSong');
  }

  const handleUpload = () => {
    inputRef.current?.click();
  };
  const handleDisplayFileDetails = () => {
    inputRef.current?.files &&
      setUploadedFileName(inputRef.current.files[0].name);
  };


  const clearForm = () => {
    // "" all useStates
  }




  return (
    <div className="App">
      <h1>
        Welcome to the Generative AI Song Generator!
      </h1>
      <h2>Song generation - as easy as 1-2-3</h2>
      <h3>Fill in the following fields, select genre & singer and click 'Generate lyrics'</h3>

      <FormControl>
        <FormLabel>Who is this for?</FormLabel>
        <Input isRequired type="text" placeholder="Recipient" />

      
      <Select isRequired placeholder='Gender'>
  <option value='male'>Male</option>
  <option value='female'>Female</option>
  <option value='other'>Other</option>
</Select>
<Select isRequired placeholder='What is the occasion?'>
  <option value='anniversary'>Anniversary</option>
  <option value='promotion'>Promotion</option>
  <option value='birthday'>Birthday</option>
</Select>

        <FormLabel>Manager</FormLabel>
        <Input isRequired type="text" placeholder="Manager name" />
        <FormLabel>Team Name</FormLabel>
        <Input isRequired type="text" placeholder="Team name" />


      <FormLabel>Image Upload:</FormLabel>
      <input
        ref={inputRef}
        onChange={handleDisplayFileDetails}
        className="d-none"
        type="file"
      />
      <button
        onClick={handleUpload}
        className={`btn btn-outline-${
          uploadedFileName ? "success" : "primary"
        }`}
      >
        {uploadedFileName ? uploadedFileName : "Upload"}
      </button>
      <FormLabel>Genre</FormLabel>
      <Select isRequired placeholder='Select a genre'>
  <option value='pop'>Pop</option>
  <option value='rock'>Rock</option>
  <option value='country'>Country</option>
  <option value='hip-hop'>Hip Hop</option>
</Select>

<FormLabel>Singer</FormLabel>
<Select isRequired placeholder='Select a singer'>
  <option value='emily'>Emily</option>
  <option value='kevin'>Kevin</option>
  <option value='katie'>Katie</option>
  <option value='natalie'>Natalie</option>
</Select>

      <Button type='submit' onClick={navGenerateSong}>Generate Lyrics</Button>
      <Button onClick={clearForm}>Clear All</Button>
      </FormControl>
    </div>
  );
}

export default Home;