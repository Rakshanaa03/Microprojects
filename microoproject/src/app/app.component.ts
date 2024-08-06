import { Component } from '@angular/core';
import { Task } from './model/task';
import { TaskserviceService } from './taskservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  task: Task;
  result: string;
  taskArr: Task[];
  flag: boolean;

  constructor(private service: TaskserviceService) {
    this.task = new Task();
    this.result = "";
    this.taskArr = [];
    this.flag = false;
  }

  async insertTask(data: any) {
    this.task.id = data.id;
    this.task.description = data.description;
    try {
      await this.service.insertTask(this.task);
      this.result = "Task Added";
      await this.findAllTasks();
    } catch (error) {
      this.result = "Error Adding Task";
    }
  }

  async updateTask(data: any) {
    this.task.id = data.id;
    this.task.description = data.description;
    try {
      await this.service.updateTask(this.task);
      this.result = "Task Updated";
      await this.findAllTasks();
    } catch (error) {
      this.result = "Error Updating Task";
    }
  }

  async deleteTask(data: any) {
    try {
      await this.service.deleteTask(data.id);
      this.result = "Task Deleted";
      await this.findAllTasks();
    } catch (error) {
      this.result = "Error Deleting Task";
    }
  }

  async findAllTasks() {
    try {
      this.taskArr = await this.service.findAllTasks();
      this.flag = true;
    } catch (error) {
      this.result = "Error Retrieving Tasks";
    }
  }

  async findTaskById(id: number) {
    try {
      const task = await this.service.findTaskById(id);
      this.taskArr = [task];
      this.flag = true;
    } catch (error) {
      this.result = "Error Finding Task";
    }
  }
}
