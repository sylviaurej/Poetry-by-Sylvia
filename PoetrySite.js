import { useState } from "react";

const poems = [
  {
    id: 1,
    title: "Whispers of the Wind",
    author: "A. Poet",
    content: "The wind whispers softly through the trees\nTelling tales carried over seas..."
  },
  {
    id: 2,
    title: "Night's Embrace",
    author: "Luna Sky",
    content: "Under the cloak of night's embrace,\nI find my thoughts in a silent space..."
  }
];

export default function PoetrySite() {
  const [newPoem, setNewPoem] = useState({ title: "", author: "", content: "" });
  const [allPoems, setAllPoems] = useState(poems);

  const handleSubmit = () => {
    if (newPoem.title && newPoem.author && newPoem.content) {
      setAllPoems([...allPoems, { ...newPoem, id: Date.now() }]);
      setNewPoem({ title: "", author: "", content: "" });
    }
  };

  return (
    <div>
      <h1>Poetry Garden</h1>

      <div>
        {allPoems.map((poem) => (
          <div key={poem.id}>
            <h2>{poem.title}</h2>
            <p><i>by {poem.author}</i></p>
            <p>{poem.content}</p>
          </div>
        ))}
      </div>

      <h2>Submit Your Poem</h2>
      <input
        placeholder="Title"
        value={newPoem.title}
        onChange={(e) => setNewPoem({ ...newPoem, title: e.target.value })}
      /><br/>
      <input
        placeholder="Author"
        value={newPoem.author}
        onChange={(e) => setNewPoem({ ...newPoem, author: e.target.value })}
      /><br/>
      <textarea
        placeholder="Your poem..."
        value={newPoem.content}
        onChange={(e) => setNewPoem({ ...newPoem, content: e.target.value })}
      ></textarea><br/>
      <button onClick={handleSubmit}>Submit Poem</button>
    </div>
  );
}