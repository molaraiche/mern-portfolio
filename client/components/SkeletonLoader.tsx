const SkeletonLoader: React.FC = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-8 gap-x-24 place-items-center mt-10'>
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className='w-full max-w-sm p-4 bg-grey-50 animate-pulse rounded-lg h-64'>
          <div className='h-36 bg-grey-500 rounded-md'></div>
          <div className='mt-4 h-4 bg-grey-500 rounded w-3/4'></div>
          <div className='mt-2 h-4 bg-grey-500 rounded w-1/2'></div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
