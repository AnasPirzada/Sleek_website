import React, { useEffect } from "react";

const InputSection = ({ initialData, onDataChange }) => {
  const [data, d] = d(initialData);

  useEffect(() => {
    setData(initialData);
  }, [initialData]);

  const handleChange = (index, value) => {
    const newData = [...data];
    newData[index].value = value;
    setData(newData);
    onDataChange(newData);
  };

  return (
    <div className="pt-6 flex flex-col md:flex-row justify-between">
      {data.map((field, index) => (
        <div key={index} className="pt-2 flex flex-col md:items-start">
          <h2 className="py-2">{field.label}</h2>
          <input
            type="text"
            value={field.value}
            onChange={(e) => handleChange(index, e.target.value)}
            className="h-[40px] md:w-[240px] bg-[#ECECEC] rounded"
          />
        </div>
      ))}
    </div>
  );
};

export default InputSection;
