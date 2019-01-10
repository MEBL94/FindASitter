import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Baby } from "src/app/entities/baby";
import { BabiesActions } from "src/app/babies-list/babies.actions";
import { BabyService } from "src/app/services/baby.service/baby.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'display-baby',
  templateUrl: './display-baby.component.html',
  styleUrls: ['./display-baby.component.scss']
})
export class DisplayBabyComponent implements OnInit {
  @Input() baby: Baby;
  @Output() babyEditClicked: EventEmitter<any> = new EventEmitter<any>();
  
  constructor(private babiesActions: BabiesActions,
    private babyService: BabyService,
    private http: HttpClient) { }

  ngOnInit() {
  }

  onDeleteClick(baby : Baby) {
  this.babiesActions.deleteBaby(baby._id)  
  }

  onEditClick() {
    // Handle logic here, or pass event to parent component.
    this.babyEditClicked.emit(this.baby);
  }
}