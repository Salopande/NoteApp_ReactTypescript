import { Box, Typography } from '@mui/material';

import { NoteObj } from '../models/notes';

// components
import Note from './Note';

interface INotesProps {
    notes: NoteObj[],
    deleteNote: (id: number) => void
}


const Notes: React.FC <INotesProps>= ({notes, deleteNote}) => {
  return (
    <Box>
      <Typography variant='h5'>Notes</Typography>
      <Box style={{display:'flex', flexWrap:"wrap"}}>
        {
          notes.map((note, index)=>(
            <Note note={note} deleteNote={deleteNote}/>
          ))
        }
      </Box>
    </Box>
  )
}

export default Notes
