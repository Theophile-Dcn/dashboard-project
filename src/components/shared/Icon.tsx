import { IconType } from 'react-icons';
import { twMerge } from 'tailwind-merge';

interface IconProps {
  icon: IconType;
  size?: number;
  color?: string;
  className?: string;
}

export default function Icon({
  icon: IconComponent,
  size = 24,
  color = 'currentColor',
  className
}: IconProps) {
  return (
    <IconComponent
      size={size}
      color={color}
      className={twMerge('', className)}
    />
  );
}
