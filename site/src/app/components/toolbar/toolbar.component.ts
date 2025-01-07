import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  templateUrl: './toolbar.component.html',
  styleUrls: ['../../../styles.scss', './toolbar.component.scss'],
  imports: [MatToolbarModule, MatIconModule]
})
export class ToolbarComponent {


  onMenuClick(): void {
    console.log('Menu clicked');
  }

  onAccountClick(): void {
    console.log('Account clicked');
  }
}
