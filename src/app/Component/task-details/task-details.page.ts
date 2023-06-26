import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.page.html',
  styleUrls: ['./task-details.page.scss'],
})
export class TaskDetailsPage implements OnInit {

  cardDetails:any;
  newComment:string = "";
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(data => {
      this.cardDetails = data;
    })
  }

  onAddComment(){
    if(this.newComment != ''){
      const newCmt = {
        comment: this.newComment,
        commentBy: "AkshaySingh",
        timeAgo: "Just now"
      }
      const updatedComments = [...this.cardDetails.comments, newCmt];
      this.cardDetails = { ...this.cardDetails, comments: updatedComments };
      this.newComment = "";
    } 
  }
}
