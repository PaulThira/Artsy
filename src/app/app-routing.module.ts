import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { EyeComponent } from './eye/eye.component';
import { ArtworkComponent } from './artwork/artwork.component';
import { PricesComponent } from './prices/prices.component';
import { SocialsComponent } from './socials/socials.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  { path: 'registration', component: RegistrationComponent },
  { path :'eye', component:EyeComponent},
  { path :'art', component:ArtworkComponent},
  { path :'prices', component:PricesComponent},
  { path :'socials', component:SocialsComponent},
  { path :'skills', component:SkillsComponent},

  {path:'', redirectTo:'/eye',pathMatch:'full'},
  {path:'**', redirectTo:'/eye'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

