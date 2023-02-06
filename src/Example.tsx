import { useRepoQuery } from './queries';
import { DisplayResult } from './DisplayResult';

/**
 * This is the textbook example from the introduction section in the docs.
 *
 * @constructor
 */
export function Example() {
  const { isLoading, error, data } = useRepoQuery();

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
