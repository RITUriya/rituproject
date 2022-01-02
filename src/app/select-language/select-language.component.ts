// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-select-language',
//   template: `
//     <p>
//       select-language works!
//     </p>
//   `,
//   styles: [
//   ]
// })
// export class SelectLanguageComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-select-language',
  template: `
    <select #langSelect (change)="translate.use(langSelect.value)">
      <option
        *ngFor="let lang of translate.getLangs()"
        [value]="lang"
        [attr.selected]="lang === translate.currentLang ? '' : null"
      >
        {{ lang }}
      </option>
    </select>
  `,
})
export class SelectLanguageComponent {
  constructor(public translate: TranslateService) {}
}
