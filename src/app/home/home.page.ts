import { Component, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { NavController, NavParams } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild(IonModal) modal: IonModal;
  constructor(private alertController: AlertController, private navCtrl: NavController) { }
  workData: any[] = [];
  workDataClon: any[] = [];
  objCount: number = 0;
  toastMsg: string = "";

  ngOnInit() {
    this.dataLoad();
  }

  name: string;
  message: string;
  description: string;
  priority: string = "High";
  handlerMessage = '';
  roleMessage = '';
  isToastOpen = false;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }

  onPriorityChange(event: any) {
    const flag = event.detail.value;
    console.log("Akshay", flag);
    if (flag == 'All') {
      this.workDataClon = this.workData;
      this.objCount = this.workDataClon.length;
    } else {
      this.workDataClon = this.workData.filter(data => data.priority === flag);
      this.objCount = this.workDataClon.length;
    }
  }

  async showDeleteAlert(item: any) {
    console.log("Confirm Deletion");
    const alert = await this.alertController.create({
      header: 'Confirm Deletion',
      message: `Are you sure you want to delete ${item.title}?`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Delete',
          handler: () => {
            this.workDataClon = this.workDataClon.filter(data => data.id !== item.id);
            this.objCount = this.workDataClon.length;
            this.toastMsg = "Task deleted successfully!";
            this.setOpen(true);
          },
        },
      ],
    });
    await alert.present();
  }
  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  onAddTask() {
    if (this.name != null && this.description != null) {
      const data = {
        id: this.workData.length + 1,
        title: this.name,
        description: this.description,
        priority: this.priority
      }

      this.workData = [data, ...this.workData];
      this.workDataClon = this.workData;
      this.objCount = this.workDataClon.length;
      this.modal.dismiss(this.name, 'confirm');
      this.toastMsg = "Task added successfully!";
      this.setOpen(true);
    } else {
      this.toastMsg = "Please add all required fields";
      this.setOpen(true);
    }
  }

  dataLoad() {
    this.workData = [
      {
        id: 1,
        ticketId: "A00001",
        title: "Complete project proposal",
        priority: "High",
        description: "Finish drafting the project proposal and submit it by end of the day.",
        dueDate: "2023-06-28",
        comments: [
          {
            comment: "Remember to include the cost estimation section.",
            commentBy: "John",
            timeAgo: "2 hours ago"
          },
          {
            comment: "Seek feedback from team members before finalizing.",
            commentBy: "Jane",
            timeAgo: "1 hour ago"
          }
        ]
      },
      {
        id: 2,
        ticketId: "A00002",
        title: "Update website content",
        priority: "Low",
        description: "Revise and update the content on the company website with the latest news and information.",
        dueDate: "2023-07-02",
        comments: []
      },
      {
        id: 3,
        ticketId: "A00003",
        title: "Schedule meeting with marketing team",
        priority: "Medium",
        description: "Coordinate a meeting with the marketing team to discuss upcoming campaigns and strategies.",
        dueDate: "2023-06-30",
        comments: [
          {
            comment: "Find a suitable meeting room with audiovisual equipment.",
            commentBy: "Sarah",
            timeAgo: "4 hours ago"
          },
          {
            comment: "Send out calendar invites to all team members.",
            commentBy: "Tom",
            timeAgo: "3 hours ago"
          }
        ]
      },
      {
        id: 4,
        ticketId: "A00004",
        title: "Review design mockups",
        priority: "High",
        description: "Carefully examine the design mockups and provide detailed feedback to the design team.",
        dueDate: "2023-07-01",
        comments: []
      },
      {
        id: 5,
        ticketId: "A00005",
        title: "Research potential clients",
        priority: "Low",
        description: "Conduct thorough research to identify and compile a list of potential clients for the company's services.",
        dueDate: "2023-07-05",
        comments: [
          {
            comment: "Focus on target industries for better results.",
            commentBy: "Michael",
            timeAgo: "1 day ago"
          }
        ]
      },
      {
        id: 6,
        ticketId: "A00006",
        title: "Prepare presentation for conference",
        priority: "Medium",
        description: "Create an engaging and informative presentation to be delivered at the upcoming industry conference.",
        dueDate: "2023-07-10",
        comments: [
          {
            comment: "Include visual aids and examples for better understanding.",
            commentBy: "Emily",
            timeAgo: "2 days ago"
          }
        ]
      },
      {
        id: 7,
        ticketId: "A00007",
        title: "Develop prototype for new feature",
        priority: "High",
        description: "Build a functional prototype for the new feature, ensuring it aligns with the project requirements.",
        dueDate: "2023-07-03",
        comments: [
          {
            comment: "Consider user feedback from the previous iteration.",
            commentBy: "Mark",
            timeAgo: "1 day ago"
          }
        ]
      },
      {
        id: 8,
        ticketId: "A00008",
        title: "Conduct user testing and gather feedback",
        priority: "Low",
        description: "Organize and carry out user testing sessions to collect valuable feedback on the product's usability and performance.",
        dueDate: "2023-07-07",
        comments: []
      },
      {
        id: 9,
        ticketId: "A00009",
        title: "Write API integration documentation",
        priority: "Medium",
        description: "Document the process and guidelines for integrating the company's API into external applications.",
        dueDate: "2023-07-15",
        comments: [
          {
            comment: "Include code examples and use cases for better understanding.",
            commentBy: "Linda",
            timeAgo: "3 days ago"
          }
        ]
      },
      {
        id: 10,
        ticketId: "A00010",
        title: "Perform security audit and address vulnerabilities",
        priority: "High",
        description: "Conduct a comprehensive security audit to identify and resolve any potential vulnerabilities in the system.",
        dueDate: "2023-07-05",
        comments: [
          {
            comment: "Engage a third-party security firm for an unbiased assessment.",
            commentBy: "Alex",
            timeAgo: "2 days ago"
          }
        ]
      }
    ];

    this.workDataClon = this.workData;
    this.objCount = this.workDataClon.length;
  }

  viewCardDetails(card: any) {
    this.navCtrl.navigateForward('/task-details', { queryParams: card });
  }
}
