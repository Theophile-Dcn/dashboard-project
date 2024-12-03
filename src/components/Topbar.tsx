import Icon from '@/src/components/common/Icon';
import { FaUserCircle } from 'react-icons/fa';

export default function TopBar() {
  return (
    <div className="bg-gray-200 h-16 flex items-center justify-end p-6 w-full">
      <div className="flex items-right gap-4">
        <button className="bg-gray-300 p-2 rounded-md">
          <Icon icon={FaUserCircle} size={24} color="black" />
        </button>
      </div>
    </div>
  );
}
