import { useState } from 'react';

export default function TeamMembers() {
  const [selectedTeam, setSelectedTeam] = useState(null);

  const teams = {
    cat: ['やまの', 'いずみ', 'あおぬま', 'さかい'],
    dog: ['はらだ', 'よしおか', 'はぎわら', 'かけはた']
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div style={{ textAlign: 'center' }}>
        <h1>リアクト分科会メンバー</h1>
        
        <div style={{ margin: '20px 0' }}>
          <button onClick={() => setSelectedTeam('cat')} style={{ margin: '0 10px', padding: '10px 20px' }}>
            🐱 猫チーム
          </button>
          <button onClick={() => setSelectedTeam('dog')} style={{ margin: '0 10px', padding: '10px 20px' }}>
            🐶 犬チーム
          </button>
        </div>

        {selectedTeam && (
          <div style={{ marginTop: '30px' }}>
            <h2>{selectedTeam === 'cat' ? '🐱 猫チーム' : '🐶 犬チーム'}</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {teams[selectedTeam].map((member, index) => (
                <li key={index} style={{ margin: '10px 0' }}>{member}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}