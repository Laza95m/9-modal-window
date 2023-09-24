import './Modal.css';

function Modal({ open, setOpen }) {
  return (
    <div
      className={`${open ? 'overlay animated show' : 'overlay animated'}`}
      onClick={() => setOpen(!open)}
    >
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <svg
          height="200"
          viewBox="0 0 200 200"
          width="200"
          onClick={() => setOpen(!open)}
        >
          <title />
          <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
        </svg>
        <img src="cat.gif" />
      </div>
    </div>
  );
}

export default Modal;
