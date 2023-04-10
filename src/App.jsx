




function App() {
  return (
    <div className="App">
      <nav className="py-5 flex justify-around bg-cyan-900 text-pink-400 font-extrabold text-3xl">
        <h1 className="logo">Tailwind Css Sample 01</h1>
        <ul>
          <li className="resume">Resume</li>
        </ul>
      </nav>
      <section className='Hero bg-black flex max-h-screen'>
        <div className="p-40 object-contain">
        <img className="rounded-lg w-screen"alt="hero" src='https://plus.unsplash.com/premium_photo-1679026956879-05c0a4e63f3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80' />
        </div>
        <div className="hero-right w-screen p-10 bg-pink-500 text-gray-200 flex justify-center
          items-center h-screen">
          <h1 className="font-extrabold text-5xl">
            Hero Title
          </h1>
        </div>
      </section>
    </div>
  );
}

export default App;
