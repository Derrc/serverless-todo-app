import { Todo } from "./types";

export const mockTodos: Todo[] = [
  {
    id: 0,
    content: "Finish the frontend",
    isDone: true,
  },
  {
    id: 1,
    content: "Host frontend on s3",
    isDone: false,
  },
  {
    id: 2,
    content: "Setup serverless backend using Api Gateway and Lambda functions",
    isDone: false,
  },
  {
    id: 3,
    content: "Setup DynamoDB",
    isDone: false,
  },
];
