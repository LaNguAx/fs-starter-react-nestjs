import { LucideIconsMap } from '@/types/enums/icons';
import type { LucideIconsEnum } from '@/types/enums/icons';

type IconProps = {
  icon: LucideIconsEnum;
  className?: string;
  size?: number;
  strokeWidth?: number;
};

export default function Icon({ icon, ...props }: IconProps) {
  const C = LucideIconsMap[icon];
  if (!C) return null;
  return <C {...props} />;
}
