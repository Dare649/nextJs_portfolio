



const Modal = ({visible, children}) => {
    return (
      <div>
        {
          visible && 
            <div className="fixed inset-0  bg-white/10">
              {children}
            </div>
        }
      </div>
    )
  }
  
  export default Modal
  