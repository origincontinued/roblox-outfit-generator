export default function PromptInput({ onGenerate }) {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Old money outfit"
      />
      <button onClick={() => onGenerate(text)}>Generate</button>
    </div>
  );
}
