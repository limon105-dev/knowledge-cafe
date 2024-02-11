import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
  return (
    <li className="bg-white rounded-md hover:border-black p-5 mt-4 font-semibold text-lg">{title}</li>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object
  }

export default Bookmark;