import { Card } from '../Card';
import { useCounter } from '../../hooks/useCounter';

export function ForwardCounter() {
  const counter = useCounter(true);

  return (
    <Card>{counter}</Card>
  );
}