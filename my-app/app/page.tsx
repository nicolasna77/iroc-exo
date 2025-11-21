"use client";
export default function Home() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const inputName = formData.get("inputField") as string;
    console.log("Submitting form with input:", inputName);
    await fetch("http://localhost:8000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: inputName }),
    });
    form.reset();
  };

  // const data = await fetch("https://api.vercel.app/blog");
  // const posts = await data.json();
  return (
    <div>
      <h1>Welcome to the Main Page</h1>
      <p>This is the main content of the application.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="inputField">Enter something:</label>
        <br />
        <input type="text" id="inputField" name="inputField" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
