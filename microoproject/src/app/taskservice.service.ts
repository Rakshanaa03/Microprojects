import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './model/task';

@Injectable({
  providedIn: 'root'
})
export class TaskserviceService {
  private url: string = "http://localhost:3007/tasks"; // URL to the JSON server or API endpoint

  constructor(private http: HttpClient) { }

  insertTask(task: Task): Promise<Task> {
    return this.http.post<Task>(this.url, task).toPromise() as Promise<Task>;
  }

  updateTask(task: Task): Promise<Task> {
    return this.http.put<Task>(`${this.url}/${task.id}`, task).toPromise() as Promise<Task>;
  }

  deleteTask(id: number): Promise<void> {
    return this.http.delete<void>(`${this.url}/${id}`).toPromise();
  }

  findAllTasks(): Promise<Task[]> {
    return this.http.get<Task[]>(this.url).toPromise() as Promise<Task[]>;
  }

  findTaskById(id: number): Promise<Task> {
    return this.http.get<Task>(`${this.url}/${id}`).toPromise() as Promise<Task>;
  }
}
