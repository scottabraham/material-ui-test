import React from 'react'
import {Button, Snackbar} from './ui-library'

  const App = () => (
    <div>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      <Snackbar open={true} message='Hello Scott' />
    </div>
  );

export default App