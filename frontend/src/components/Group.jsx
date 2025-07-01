function Group({ onBack }) {
  return (
    <div style={{ padding: '20px' }}>
      <button onClick={onBack}>← Voltar</button>
      <h2>Grupo de Gifs</h2>
      {/* Conteúdo do grupo */}
    </div>
  );
}

export default Group;
