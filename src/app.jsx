import React, { useState } from 'react';

export default function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');

  const addItem = () => {
    if (input.trim()) {
      setItems([...items, { name: input, checked: false }]);
      setInput('');
    }
  };

  const toggleCheck = (i) => {
    const copy = [...items];
    copy[i].checked = !copy[i].checked;
    setItems(copy);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>🛒 오늘 뭐 사지?</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="물품을 입력하세요"
      />
      <button onClick={addItem}>추가</button>
      <ul>
        {items.map((item, i) => (
          <li key={i} onClick={() => toggleCheck(i)} style={{ textDecoration: item.checked ? 'line-through' : 'none' }}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

