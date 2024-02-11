import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  const[Bookmarklist, setBookmarklist] = useState([]);
  const[readingTime, setReadingTime] = useState(0);

  const handleBookmark = blog =>{
    const newBookmarks = [...Bookmarklist, blog];
    setBookmarklist(newBookmarks);
  }

  const handleReadingTime = (id, time) =>{
    setReadingTime(readingTime + time);
    const remainingBookmark = Bookmarklist.filter(bookmark => bookmark.id !== id);
    setBookmarklist(remainingBookmark);
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex sm:container mx-auto mt-4 px-4 sm:px-0'>
      <Blogs handleBookmark={handleBookmark} handleReadingTime={handleReadingTime}></Blogs>
      <Bookmarks readingTime={readingTime} Bookmarklist={Bookmarklist}></Bookmarks>
      </div>
    </>
  )
}

export default App
