const FAQ = ({ title, description, showItems, setShowItems }) => {
  const handleClick = () => {
    setShowItems();
  };

  return (
    <div className="border border-gray-400 rounded-lg w-full my-2.5 p-2.5">
      <div className="py-1" onClick={handleClick}>
        <h3 className="text-xl font-medium ">{title}</h3>
        {showItems ? (
          <i className={`fa-solid fa-chevron-up`}></i>
        ) : (
          <i className={`fa-solid fa-chevron-down`}></i>
        )}
      </div>
      {showItems && (
        <p className="border-t border-gray-300 w-full transition-all duration-200 ease-in overflow-hidden py-2.5">
          {description}
        </p>
      )}
    </div>
  );
};

export default FAQ;
