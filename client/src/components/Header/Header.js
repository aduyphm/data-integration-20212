import React, { useState, useEffect } from "react";
import "./Header.css";

export default function Header() {

  const [inputValue, setInputValue] = useState('')

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    // 'keypress' event misbehaves on mobile so we track 'Enter' key via 'keydown' event
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      onSubmit();
    }
  }

  const onSubmit = () => window.location.href="/tim-kiem/"+inputValue;

  return (
    <header>
      <div id="search-bar">
        <div className="align">
          <a href="/" className="logo-top"></a>
          <form action="" className="form">
            <input
              type="text"
              placeholder="Nhập nội dung tìm kiếm"
              className="search-input"
              value={inputValue}
              onKeyDown={onKeyDown}
              onInput={e => setInputValue(e.target.value)}
            />
            <input 
              type="button" 
              value="Tìm kiếm" 
              className="search-button" 
              onClick={onSubmit}
            />
          </form>
          {/* <a href="#" className="link gray-border">Join</a> */}
          <a href="/admin/login" className="link gray-border">Log in</a>
        </div>
      </div>
    </header>
  );
}
