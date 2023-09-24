import { useState } from 'react';
import './App.css';
import Modal from './component/Modal';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <button className="open-modal-btn" onClick={() => setOpen(!open)}>
        Open window
      </button>
      <Modal open={open} setOpen={setOpen} />
    </div>
  );
}

export default App;
