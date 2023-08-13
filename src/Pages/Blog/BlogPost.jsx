const BlogPost = ({ title, description, authorName, authorImage, authorEmail }) => {
  return (
    <div className="bg-my-card rounded-lg shadow-md p-6 md:p-10 lg:p-12 border hover:border-myprimary">
      <h2 className="text-3xl font-semibold mb-4">{title}</h2>
      <div className="flex items-center space-x-4 mb-4">
        <img src={authorImage} alt={`${authorName} Profile`} className="w-12 h-12 rounded-full" />
        <div>
          <p className="text-sm font-medium">By {authorName}</p>
          <p className="text-sm text-gray-600">{authorEmail}</p>
        </div>
      </div>
      <p className="text-gray-700 mb-6">{description}</p>
      {/* <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Read More</button> */}
    </div>
  );
};

export default BlogPost;
