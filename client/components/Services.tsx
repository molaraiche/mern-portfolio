import Link from "next/link";

const Services = () => {
  return (
    <section className='min-h-screen dark:text-white flex flex-col font-fm'>
      <div className=''>
        <h1 className='font-semibold text-5xl'>Packs</h1>
      </div>
      <div className='flex items-center flex-wrap justify-center w-full gap-5 my-10'>
        <div className='bg-grey-50 dark:text-black p-4 flex flex-col justify-between rounded-3xl'>
          <h2 className=' text-[40px] font-semibold'>Portfolios Pack</h2>
          <p className='mt-3 text-xl   font-quicksand font-medium'>
            Your portfolio is more than just a showcase, it&apos;s your digital
            identity. With the Portfolios Pack, we craft fully customized,
            high-performance websites tailored to your unique needs. No
            templates, no compromises,just sleek designs, responsive layouts,
            and a powerful dashboard to manage your projects or blogs
            seamlessly. Let your portfolio leave a lasting impression, and
            connect with clients effortlessly with end-to-end secure
            communication.
          </p>
          <div className='flex justify-end mt-4'>
            <Link
              href='https://wa.link/tbf6op'
              title='link to redirect you to whatsapp so we talk further about this package'
              target='_blank'
              className='py-3 px-6 bg-grey-500 dark:bg-black-400 dark:text-white rounded-xl font-medium '>
              Learn More
            </Link>
          </div>
        </div>
        <div className='bg-grey-50 dark:text-black p-4 flex flex-col justify-between rounded-3xl'>
          <h2 className=' text-[40px] font-semibold'>Custom Website Pack</h2>
          <p className='mt-3 text-xl  font-quicksand font-medium'>
            Bring your vision to life with the Custom Website Pack designed to
            cater to your unique requirements. We deliver fully bespoke,
            high-performance web applications equipped with dynamic dashboards,
            seamless payment integrations (Stripe or PayPal), and responsive
            designs that captivate your audience. Experience unparalleled
            functionality, top-tier SEO optimization, and 90 days of dedicated
            support to ensure your website runs smoothly.
          </p>
          <div className='flex justify-end mt-4'>
            <Link
              href='https://wa.link/dsnh8y'
              title='link to redirect you to whatsapp so we talk further about this package'
              target='_blank'
              className='py-3 px-6 bg-grey-500 dark:bg-black-400 dark:text-white rounded-xl font-medium '>
              Learn More
            </Link>
          </div>
        </div>
        <div className='bg-grey-50 dark:text-black p-4 flex flex-col justify-between rounded-3xl'>
          <h2 className=' text-[40px] font-semibold'>Collaborations Pack</h2>
          <p className='mt-3 text-xl font-quicksand font-medium'>
            Looking for a reliable and skilled team player? The Collaborations
            Pack offers you a fast learner and problem solver ready to integrate
            seamlessly with your team. With flexible time zones, a commitment to
            win-win relationships, and discounts of up to 20% on hourly rates,
            we prioritize building long-term, successful collaborations tailored
            to your needs.
          </p>
          <div className='flex justify-end mt-4'>
            <Link
              href='https://wa.link/wwrd20'
              target='_blank'
              title='link to redirect you to whatsapp so we talk further about this package'
              className='py-3 px-6 bg-grey-500 dark:bg-black-400 dark:text-white rounded-xl font-medium '>
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
