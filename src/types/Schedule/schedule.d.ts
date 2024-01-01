export type Schedule = {
  professional: {
    id: string;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
  };
  client: {
    id: string;
    name: string;
    phone: string;
  };
  procedure: {
    name: string;
    description: string;
    price: number;
    duration: number;
    hour: number;
  };
};
