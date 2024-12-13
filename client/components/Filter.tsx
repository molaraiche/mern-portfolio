import React from "react";

interface FilterProps {
  categories: string[];
  onFilterChange: (category: string) => void;
  selectedCategory: string;
}

const Filter: React.FC<FilterProps> = ({
  categories,
  onFilterChange,
  selectedCategory,
}) => {
  return (
    <div className='h-[20vh] font-fm flex items-center justify-between'>
      <p className='border-2 border-grey-500 py-3 px-6 rounded-xl font-semibold'>
        {selectedCategory || "All"}
      </p>

      <select
        className='w-[30%] h-10 bg-transparent border-2 border-grey-500 rounded-xl font-semibold'
        onChange={(e) => onFilterChange(e.target.value)}>
        <option value='' className='bg-transparent text-black'>
          All
        </option>
        {categories.map((category) => (
          <option
            key={category}
            className='bg-transparent text-black font-quicksand'
            value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
