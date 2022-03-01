export const Meaning = ({ object }) => {
  const definitions = object.definitions;

  return (
    <div>
      <p>{object.partOfSpeech}</p>
    </div>
  );
};
