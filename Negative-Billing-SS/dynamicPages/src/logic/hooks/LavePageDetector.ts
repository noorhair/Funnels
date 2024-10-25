const useLeavePageDetector = ( handleUnloadProp : () => void ) => {

  const handleUnload = (event: { preventDefault: () => void; returnValue: string; }) => {
    event.preventDefault();
    event.returnValue = '';
    handleUnloadProp();
  };

  const addListener = () => {
    window.addEventListener('beforeunload', handleUnload);
  }
  const removeListener = () => {
    window.removeEventListener('beforeunload', handleUnload);
  }

  return {
    addListener, 
    removeListener
  }
};

export default useLeavePageDetector;
