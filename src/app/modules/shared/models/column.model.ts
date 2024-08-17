import { ToDo } from "./todo.model";

export interface Column {
  title: string;
  tasks: ToDo[];
}
