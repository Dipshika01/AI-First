import React, { useState } from 'react';
import BookForm from './components/BookForm';
import BookList from './components/BookList';

function App() {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleBookAdded = () => {
    setRefreshKey(prev => prev + 1);
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Claude CRUD Wizard</h1>
      <BookForm onBookAdded={handleBookAdded} />
      <BookList key={refreshKey} />
    </div>
  );
}

export default App;