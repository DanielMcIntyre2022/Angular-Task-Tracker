import { Component, OnInit } from '@angular/core';
import { TASKS } from 'src/mock-tasks';
import { Task } from 'src/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = TASKS

  constructor() { }

  ngOnInit(): void {
  }

}
