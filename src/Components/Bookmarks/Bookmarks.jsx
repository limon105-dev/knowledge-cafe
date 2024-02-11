import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types';

const Bookmarks = ({readingTime, Bookmarklist}) => {
  return (
    <div className="md:w-1/3 md:ml-6 mt-10">
      <div className="bg-slate-200 rounded-md text-center">
        <h3 className="text-base font-bold px-12 py-5 text-blue-600 ">Spent time on read: {readingTime} min</h3>
      </div>
      <div className="bg-gray-100 p-7 mt-6 rounded-md">
        <h3 className="text-2xl font-bold mb-2">Bookmarked Blogs: {Bookmarklist.length}</h3>
        <ul>
          {
            Bookmarklist.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
          }
        </ul>
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
    Bookmarklist: PropTypes.array,
    readingTime: PropTypes.number
  }

export default Bookmarks;