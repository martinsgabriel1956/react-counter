import { useCounter } from '../../hooks/useCounter';

import { Card } from '../Card';

export function BackwardCounter() {
  const counter = useCounter(false);

  return (
    <Card>{counter}</Card>
  );
}