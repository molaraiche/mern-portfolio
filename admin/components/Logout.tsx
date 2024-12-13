import { CiLogout } from "react-icons/ci";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
const Logout = () => {
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("token");
    router.push("/");
  };
  return (
    <div className='text-brand-white relative w-full'>
      <button
        onClick={handleLogout}
        className='absolute bg-red-500 text-brand-white bottom-10 right-10 w-36 h-14 rounded-[10px] z-50 flex items-center justify-center gap-2 font-semibold'>
        <CiLogout className='w-6 h-6' />
        <span>Logout</span>
      </button>
    </div>
  );
};

export default Logout;
