import { useQuery } from 'react-query';

async function fetchData(url: string) {
  const res = await fetch(url);

  return res.json();
}

export function useRepoQuery() {
  return useQuery('repoData', () =>
    fetchData('https://api.github.com/repos/tannerlinsley/react-query'),
  );
}


export function usePokemonQuery() {
  return useQuery('pokemonData', () =>
    fetchData('https://pokeapi.co/api/v2/pokemon/pikachu'),
  );
}
