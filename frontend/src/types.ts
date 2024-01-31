export type Todo = {
  id: string;
  content: string;
  isDone: boolean;
};

export type GetTodosResponse = {
  Items: Todo[];
};

export type PostTodosRequestPayload = {
  content: string;
};

export type TodosResponse = {
  $metadata: {
    httpStatusCode: number;
  };
};

export type DeleteTodosPayload = {
  id: string;
};
