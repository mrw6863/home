import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { argbFromHex, hexFromArgb, themeFromSourceColor, TonalPalette } from '@material/material-color-utilities';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  templateUrl: './toolbar.component.html',
  styleUrls: ['../../../styles.scss', './toolbar.component.scss'],
  imports: [MatToolbarModule, MatIconModule]
})
export class ToolbarComponent {
  m3ThemeColorsJSON = themeFromSourceColor(argbFromHex('#6750A4'), []);
  // primary = hexFromArgb(theme.schemes.light.primary);
  // primary98 = TonalPalette.fromInt(primary).tone(98);


  onMenuClick(): void {
    console.log('Menu clicked');
  }

  onAccountClick(): void {
    console.log('Account clicked');
  }
}
