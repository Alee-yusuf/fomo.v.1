// TODO: Add more icon variants as needed
// TODO: Consider using a custom icon library or SVG sprites for better performance

import { HTMLAttributes } from 'react';
import { IconType } from 'react-icons';
import { clsx } from 'clsx';

interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  icon: IconType;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
}

const Icon: React.FC<IconProps> = ({ 
  icon: IconComponent, 
  size = 'md', 
  color, 
  className, 
  ...props 
}) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8'
  };

  return (
    <span 
      className={clsx('inline-flex items-center justify-center', className)} 
      {...props}
    >
      <IconComponent 
        className={clsx(sizes[size])} 
        style={color ? { color } : undefined}
      />
    </span>
  );
};

export default Icon;