import './App.css'
import Header from './components/Header'
import Entry from './components/Entry'
import data from './data'
import Footer from './components/Footer'

function App() {
  const entryElements = data.map(entry => {
    return (
      <Entry
        key={entry.id}
        entry={entry}
      />
      
    )
  });

  return (
    <>
      <Header />
      {entryElements}
      <Footer/>
    </>
  )
}

export default App
