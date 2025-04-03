import './App.css'
import Header from './components/Header'
import Entry from './components/Entry'
import data from './data'

function App() {
  const entryElements = data.map(entry => {
    return (
      <Entry
        img={{
          src: entry.img.src,
          alt: entry.img.alt
        }}
        title={entry.title}
        country={entry.country}
        googleMapsLink={entry.googleMapsLink}
        date={entry.dates}
        text={entry.text}
      />
      
    )
  });

  return (
    <>
      <Header />
      {entryElements}
    </>
  )
}

export default App
