import { type ReactNode } from 'react';
import { useReveal } from '../hooks/useReveal';

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number; // 1~5
}

const RevealSection = ({ children, className = '', delay }: Props) => {
  const { ref, visible } = useReveal(0.12);

  const cls = [
    'reveal',
    visible ? 'reveal--visible' : '',
    delay ? `reveal--d${delay}` : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div ref={ref} className={cls}>
      {children}
    </div>
  );
};

export default RevealSection;
