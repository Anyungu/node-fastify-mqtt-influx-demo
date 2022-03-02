function Card(props) {
  const { measurementName, measurementValue } = props;
  return (
    <div className="flex justify-space-around w-full">
      <div className="block p-6 rounded-lg shadow-sm bg-white max-w-sm w-full">
        <p className="font-extrabold text-3xl mb-4 text-right">
          {(Math.round(measurementValue * 100) / 100).toFixed(2)}
        </p>
        <h5 className="text-gray-900 text-xl leading-tight font-medium mb-0">
          {measurementName}
        </h5>
      </div>
    </div>
  );
}

export default Card;
