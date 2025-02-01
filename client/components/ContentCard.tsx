const ContentCard = ({
  title,
  Content,
}: {
  title: string;
  Content?: string;
}) => {
  return (
    <div className='w-[700px] xl:h-[450px] bg-brand-black dark:bg-brand-white text-brand-white dark:text-brand-black rounded-[10px] py-7 px-8 font-quicksand cursor-pointer hover:scale-110 ease-in duration-150'>
      <h4 className='text-2xl font-bold my-2'>{title} </h4>
      <p className='font-medium leading-8'>{Content}</p>
    </div>
  );
};

export default ContentCard;
