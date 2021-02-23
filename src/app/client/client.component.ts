import { Component, OnInit } from '@angular/core';
import { Client } from '../api/models';
import { ClientControllerService } from '../api/services/client-controller.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {


  public clients: Client[] = [];

  constructor(private clientService: ClientControllerService) {}

  ngOnInit(): void {
   
  }

  getClients() {
  
    this.clientService.find().subscribe((data: any[])=>{
                                            console.log(data);
                                             this.clients= data});
    
  }

}
