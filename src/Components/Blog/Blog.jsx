import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBookmark} from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';
const Blog = ({blog, handleBookmark, handleReadingTime}) => {
  const {
    id,
    cover,
    author,
    author_img,
    posted_date,
    reading_time,
    title,
    hashtags
  } = blog;
  return (
    <div className='grid-rows-1 gap-4'>
      <div className="card rounded-none px-4 pt-10 bg-base-100 shadow-xl border-b-2">
        <figure><img className='rounded-md' src={cover} alt={title}/></figure>
        <div className="card-body">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex items-center gap-x-6">
              <img className="h-16 w-16 rounded-full" src={author_img} alt={author}/>
              <div>
                <h3 className="text-2xl font-bold leading-7 tracking-tight text-gray-900">{author}</h3>
                <p className="text-base font-semibold leading-6 text-gray-400">{posted_date}</p>
              </div>
            </div>
            <div>
              <span className='text-gray-400 font-medium text-xl'>{reading_time}
                <span className='ml-2'>min read</span>
              </span>
              <button onClick={() => handleBookmark(blog)} className='ml-4'>
                <FontAwesomeIcon icon={faBookmark}/>
              </button>
            </div>
          </div>
          <h2 className="card-title text-4xl font-bold leading-10 my-4">{title}</h2>
          <div className='mb-5 text-gray-400 flex flex-wrap'>
            {hashtags.map((hashtag, idx) => <span key={idx} className='pr-2'>
              <a href="#">{hashtag}</a>
            </span>)
}
          </div>
          <div className="card-actions">
            <button onClick={()=>handleReadingTime(id, reading_time)} className='underline text-blue-600 font-semibold text-xl'>Mark as read</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookmark: PropTypes.func,
  handleReadingTime: PropTypes.func,
}

export default Blog;