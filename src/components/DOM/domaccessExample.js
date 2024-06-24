import React, { useRef } from 'react';

function DOMAccessExample() {
  const inputRef = useRef(null);

  const focusInput = () => {
    // Sử dụng tham chiếu để focus vào phần tử input
    inputRef.current.focus();
  };

  const resetInput = () => {
    // Sử dụng tham chiếu để xóa giá trị của phần tử input
    inputRef.current.value = '';
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
      <button onClick={resetInput}>Reset Input</button>
    </div>
  );
}

export default DOMAccessExample;