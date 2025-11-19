// TODO: relocate file
type dbSchema = {
  butterflies: Array<{
    id: string;
    commonName: string;
    species: string;
    article: string;
  }>;
  users: Array<{ id: string; username: string }>;
};

export type { dbSchema };
