import { usePokemonQuery } from './queries';
import { DisplayResult } from './DisplayResult';

export function Pokemon() {
  const { isLoading, error, data } = usePokemonQuery();

  return (
    <DisplayResult isLoading={isLoading} error={error as { message: string}}>
      <h2>{data.name}</h2>
      <p>{data.description}</p>
      <ul>
        <li>
          Subs: <strong>{data.subscribers_count}</strong>
        </li>
        <li>
          Stars: <strong>{data.stargazers_count}</strong>
        </li>
        <li>
          Forks: <strong>{data.forks_count}</strong>
        </li>
      </ul>
    </DisplayResult>
  );
}
