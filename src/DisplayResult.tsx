type Props = { isLoading: boolean, error: { message: string }, children: React.ReactNode };

export function DisplayResult({ isLoading, error, children }: Props) {
  if (isLoading) {
    return <>Loading...</>;
  }

  if (error) {
    return <>
      An error has occurred: {(error as unknown as { message: string })?.message}
    </>;
  }

  return (
    <>{children}</>
  );
}
