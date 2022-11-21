export interface CharacterInterface {
    id?: number;
    name?: string;
    status?: string;
    species?: string;
    type?: string;
    gender?: string;
    origin?: {
      name: string,
    };
    location?: {
      name: string,
    }
    image?: string;
    url?: string
  }
  
  export interface CharacterResponseInterface {
    info: {
      count: number;
      next: string;
      pages: number;
      prev: string;
    };
    results: CharacterInterface[];
  }
