import { Component, OnInit } from '@angular/core';
import { ActionLogService } from '../../../services/ActionLogs/action-log.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-of-logs',
  templateUrl: './list-of-logs.component.html',
  styleUrl: './list-of-logs.component.css'
})
export class ListOfLogsComponent implements OnInit {
  listOfLogs: any[] | undefined;

  listOfPositives: any[] | undefined = [];
  listOfNegatives: any[] | undefined = [];

  constructor(private actionLogService: ActionLogService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.actionLogService.getActionLogsForEmployee(id).subscribe((res: any) => {
      this.listOfLogs = res;
    }, err => {
      console.log(err);
    }, () => {
      this.listOfPositives = this.listOfLogs?.filter(log => log.pointsType === 'POSITIVE');

      this.listOfNegatives = this.listOfLogs?.filter(log => log.pointsType === 'NEGATIVE');
    });
  }
}
