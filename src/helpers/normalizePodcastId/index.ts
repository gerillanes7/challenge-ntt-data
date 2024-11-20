export const normalizeEpisodeId = (input: string): string => {
  const guidMatch = input.match(
    /([a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})/i
  );

  return guidMatch ? guidMatch[0] : "";
};
