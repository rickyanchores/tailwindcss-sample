




function App() {
  return (
    <div className="App">
      <nav className="py-10 flex justify-around text-pink-400 font-extrabold text-3xl">
        <h1>Tailwind Css Sample 01</h1>
        <ul>
          <li>Resume</li>
        </ul>
      </nav>
      <section className='Hero bg-black flex max-h-screen'>
        <div className="p-40 object-contain">
        <img className="rounded-lg" src='https://plus.unsplash.com/premium_photo-1679026956879-05c0a4e63f3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'/>
        </div>
        <h1 className="p-10 bg-pink-500 text-gray-200 font-extrabold text-5xl flex justify-center
        items-center h-screen">
          Hero Section
        </h1>
      </section>
    </div>
  );
}

export default App;
