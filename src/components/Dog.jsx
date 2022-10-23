export const Dog = ({ dog: { url, breeds } }) => {
  const { name, breed_group, temperament } = breeds[0];
  return (
    <div style={{ display: 'flex', gap: 16 }}>
      <img src={url} width="480" alt="dog" />
      <div>
        <p> Name:{name}</p>
        <p>Bree Group:{breed_group}</p>
        <p>Temperament:{temperament}</p>
      </div>
    </div>
  );
};
