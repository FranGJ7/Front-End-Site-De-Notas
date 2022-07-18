import React, { useState } from 'react';
import HeaderLogged from "../../components/header-logged";
import Notes from '../../components/notes/index';

const NotesScreen = () => {
   const [isOpen, setIsOpen] = useState(false);
   return(
  <>
    <HeaderLogged setIsOpen={setIsOpen}/>
    <Notes setIsOpen={setIsOpen} isOpen={isOpen}/>
  </>
);}

export default NotesScreen; 