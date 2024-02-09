import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CursesComponent } from './curses.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: CursesComponent }
        ])
    ],
    exports: [RouterModule]
})
export class CoursesRoutingModule {}
