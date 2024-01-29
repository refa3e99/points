import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { ActionLog } from '../../models/actionLog';

@Injectable({
  providedIn: 'root'
})
export class ActionLogService {

  constructor(private http: HttpClient) { }

  getActionLogsForEmployee(id: string | null) {
    return this.http.get(environment.apiUrl + `/actionLogs/${id}`);
  }

  addActionLog(actionLog: ActionLog){
    return this.http.post(environment.apiUrl + '/actionLogs', actionLog);
  }
}
