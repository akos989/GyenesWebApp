import { Component, OnInit, Renderer2 } from '@angular/core';
import { AuthService } from 'src/app/shared/login/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-operator-header',
  templateUrl: './operator-header.component.html',
  styleUrls: ['./operator-header.component.css']
})
export class OperatorHeaderComponent implements OnInit {

  open:boolean = false;
  currentUserSub: Subscription;
  newResNumber: number = 0;

  constructor(private renderer: Renderer2, private authService: AuthService) { }

  ngOnInit(): void {
    if (this.authService.currentUser)
      this.newResNumber = this.authService.currentUser.newReservations.length;
    this.currentUserSub = this.authService.newResNumberChange.subscribe(() => {
      this.newResNumber = this.authService.currentUser.newReservations.length;
    });
  }
  toggleOpen(event) {
    event.stopPropagation();
    event.preventDefault();
    this.open = !this.open;
    if (this.open)
      this.renderer.addClass(document.body, 'modal-open');
    else
      this.renderer.removeClass(document.body, 'modal-open');
  }
  closeNav(event) {
    event.stopPropagation();
    event.preventDefault();
    this.open = false;
    this.renderer.removeClass(document.body, 'modal-open');
  }
}
