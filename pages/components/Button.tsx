const Button = (props: any) => {
  return (
    <button className="w-12 h-12 bg-gray-800 rounded-full mr-3 hover:bg-orange-600 hover:text-white">
      {props.number}
    </button>
  );
};

export default Button;
