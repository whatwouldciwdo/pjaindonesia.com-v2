import styles from '@/styles/modules/organicDivider.module.css';

interface OrganicDividerProps {
  variant: 1 | 2 | 3;
  color?: string;
  className?: string;
  flip?: boolean;
}

export default function OrganicDivider({ variant, color = 'currentColor', className = '', flip = false }: OrganicDividerProps) {
  const style = flip ? { transform: 'scaleY(-1)' } : undefined;
  
  return (
    <div className={`${styles.divider} ${className}`} style={style}>
      <svg className={styles.desktop} fill={color} preserveAspectRatio="none">
        <use href={`#organic-${variant}-desk`} />
      </svg>
      <svg className={styles.mobile} fill={color} preserveAspectRatio="none">
        <use href={`#organic-${variant}-mob`} />
      </svg>
    </div>
  );
}
