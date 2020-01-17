import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CSVRecord } from '../CSVModel';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  amount1: string;
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  @ViewChild('fileUpload', { static: true }) fileUploadEl: ElementRef;
  contents: any[];
  name = '';
  records: any[];
  amount:number;
  amount2:number;
  public fileChanged(event?: UIEvent): void {
    const files: FileList = this.fileUploadEl.nativeElement.files;
    console.log(`files: `, files);
    const file = files[0];
    const reader = new FileReader();
    const loaded = (el) => {
      const contents = el.target.result;
      //console.log('onloaded', contents);
      //this.contents = contents;
      let csvRecordsArray = contents.split(/\r\n|\n/);
      let headersRow = this.getHeaderArray(csvRecordsArray);
      this.records = this.getRecord(csvRecordsArray, headersRow.length);
      console.log(this.records)
    }
    reader.onload = loaded;
    reader.readAsText(file, 'UTF-8');
    this.name = file.name;
  }


  getRecord(csvRecordsArray: any, b: any) {
    let csvArr = [];
       for (let i = 1; i < csvRecordsArray.length; i++) {
      let curruntRecord = csvRecordsArray[i].split(',');
     if (curruntRecord.length == b) {
        let csvRecord: CSVRecord = new CSVRecord();
        csvRecord.name = curruntRecord[0].trim();
        csvRecord.email = curruntRecord[1].trim();
        csvRecord.phone = curruntRecord[2].trim();
        csvRecord.source = curruntRecord[3].trim();
        csvRecord.recipient = curruntRecord[4].trim();
        this.amount=csvRecord.amount = curruntRecord[5].trim();
        this.amount2=(this.amount2)+(+this.amount);
        
        csvRecord.schedule = curruntRecord[6].trim();
        csvRecord.reference = curruntRecord[7].trim();
        
        csvArr.push(csvRecord);
          }
          
    }
    return csvArr;
  }

  

  getHeaderArray(csvRecordsArray: any) {
    let headers = (csvRecordsArray[0]).split(',');
    let headerArray = [];
    for (let i = 0; i < headers.length; i++) {
      headerArray.push(headers[i]);
    }
    return headerArray;
  }

}
