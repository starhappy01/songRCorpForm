import React, {useState, useRef} from 'react';
import {useNavigate} from 'react-router';
import { FormControl, Select, Input, Button, FormLabel, ThemeProvider, theme, Heading } from '@chakra-ui/react'



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
      <Heading>
        Welcome to the Generative AI Song Generator!
      </Heading>
      <h3>Song generation - as easy as 1-2-3</h3>
      <h4>Fill in the following fields, select genre & singer and click 'Generate lyrics'</h4>

<ThemeProvider theme={theme}>
      <FormControl mt={6} isRequired>
        <FormLabel>Who is this for?</FormLabel>
        <Input isRequired type="text" placeholder="Recipient" />
        </FormControl>

      <FormControl isRequired>
      <FormLabel>Gender</FormLabel>
      <Select placeholder='Select gender'>
  <option value='male'>Male</option>
  <option value='female'>Female</option>
  <option value='other'>Other</option>
</Select>
</FormControl>
<FormControl isRequired>
<FormLabel>What is the occasion?</FormLabel>
<Select  placeholder='Select occasion'>
  <option value='anniversary'>Anniversary</option>
  <option value='promotion'>Promotion</option>
  <option value='birthday'>Birthday</option>
</Select>
</FormControl>

<FormControl isRequired>
        <FormLabel>Manager</FormLabel>
        <Input  type="text" placeholder="Manager name" />
        </FormControl>

        <FormControl isRequired>
        <FormLabel>Team Name</FormLabel>
        <Input  type="text" placeholder="Team name" />
        </FormControl>

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

      <FormControl isRequired>
      <FormLabel>Genre</FormLabel>
      <Select  placeholder='Select a genre'>
  <option value='pop'>Pop</option>
  <option value='rock'>Rock</option>
  <option value='country'>Country</option>
  <option value='hip-hop'>Hip Hop</option>
</Select>
</FormControl>

<FormControl isRequired>
<FormLabel>Singer</FormLabel>
<Select  placeholder='Select a singer'>
  <option value='emily'>Emily</option>
  <option value='kevin'>Kevin</option>
  <option value='katie'>Katie</option>
  <option value='natalie'>Natalie</option>
</Select>
</FormControl>

      <Button onClick={clearForm} colorScheme='purple' variant="outline">Clear All</Button>
      <Button type="submit" colorScheme='purple' onClick={navGenerateSong}>
 Generate Lyrics
</Button>
      </ThemeProvider>
    </div>
  );
}

export default Home;