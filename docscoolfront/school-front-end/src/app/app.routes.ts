import { Routes } from '@angular/router';
import {TymplateComponent} from "./tymplate/tymplate.component";
import {StudentComponent} from "./student/student.component";
import {PamentsComponent} from "./paments/paments.component";
import {InscriptionComponent} from "./inscription/inscription.component";
import {LoginComponent} from "./login/login.component";
import {LogoutComponent} from "./logout/logout.component";
import {AuthguardGuard} from "./authguard.guard";
import {NewstudentComponent} from "./newstudent/newstudent.component";
import {AddPaymentComponent} from "./add-payment/add-payment.component";

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'inscription', component: InscriptionComponent },

  {
    path: 'tymplate',
    component: TymplateComponent,
    canActivate: [AuthguardGuard],
    children: [
      { path: 'student', component: StudentComponent },
      { path: 'payment', component: PamentsComponent },
      {path : 'newStudent', component : NewstudentComponent},
      {path : 'newPayment', component: AddPaymentComponent}
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
