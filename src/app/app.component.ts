import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Log } from './log';
import { LogService } from './log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logs: Log;
  error = '';
  success = '';
  total = 0;

  log = new Log(0, '', '', '');

  constructor(private logService: LogService) {
  }

  addLog(f): void {
    
    var tempLog = new Log(0, '', '', '');
    tempLog = this.log;
    
    console.log(tempLog);
    this.logService.store(tempLog).subscribe(
      (data: Log) => {
        console.log(data);
      },
      (error: any) => console.log("Could not add.")
      
    );
    f.controls['boarded'].reset();
    f.controls['stop'].reset();
    f.controls['loop'].reset();
    console.log(tempLog);
  }

  private resetErrors(){
    this.success = '';
    this.error   = '';
  }

}
