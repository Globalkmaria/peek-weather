import { ReactNode } from 'react';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';

interface ExpandCardProps {
  children?: ReactNode;
  open: boolean;
}

const ExpandCard = ({ open, children }: ExpandCardProps) => {
  const openClassName = open ? 'animate-close-scroll' : 'animate-open-scroll';
  return (
    <div>
      <div className={`grid overflow-hidden ${openClassName}`}>
        <div className='min-h-0 overflow-y-hidden overflow-x-auto scrollbar-thin scrollbar-thumb-black scrollbar-track-primary'>
          {children}
        </div>
      </div>
      <button
        className='flex items-center justify-center w-full text-2xl'
        type='button'
        aria-label={`expand ${open ? 'close' : 'open'} button`}
      >
        {open ? <MdExpandLess /> : <MdExpandMore />}
      </button>
    </div>
  );
};

export default ExpandCard;
