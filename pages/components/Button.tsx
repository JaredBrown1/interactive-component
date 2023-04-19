const Button = (props: any) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <button
      onClick={handleSubmit}
      className="w-12 h-12 bg-gray-800 rounded-full text-gray-400 mr-3 hover:bg-orange-600 hover:text-white focus:bg-gray-700 focus:text-white"
    >
      {props.number}
    </button>
  );
};

export default Button;
