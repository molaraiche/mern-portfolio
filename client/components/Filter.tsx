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
    <div className='h-[20vh] font-ls flex items-center justify-between'>
      <p className='border-2 w-[100px] text-center border-brand-light-black py-2 rounded-xl font-semibold'>
        {selectedCategory || "All"}
      </p>

      <select
        className=' h-12 min-w-[200px] bg-transparent border-2 border-grey-500 rounded-xl font-semibold'
        onChange={(e) => onFilterChange(e.target.value)}>
        <option value='' className='bg-transparent text-brand-black'>
          All
        </option>
        {categories.map((category) => (
          <option
            key={category}
            className='bg-transparent text-brand-black font-quicksand py-2 '
            value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
