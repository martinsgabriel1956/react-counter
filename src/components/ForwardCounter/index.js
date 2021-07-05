import { Card } from '../Card';
import { useCounter } from '../../hooks/useCounter';

export function ForwardCounter() {
  const counter = useCounter();

  return (
    <Card>{counter}</Card>
  );
}