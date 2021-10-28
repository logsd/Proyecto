import { NosotrosComponent} from "./components/nosotros/nosotros.component";

import { RouterModule,Routes } from "@angular/router";
import { Home1Component } from "./components/home1/home1.component";
import { DemosComponent } from "./components/demos/demos.component"
import { MessagesComponent } from "./components/messages/messages.component"

const app_routes: Routes= [
  { path: 'home1', component: Home1Component},
  { path: 'nosotros', component: NosotrosComponent},
  { path: 'demos', component: DemosComponent},
  { path: 'messages', component: MessagesComponent},
  { path: '**', pathMatch:'full', redirectTo:'home'}
];

export const app_routing = RouterModule.forRoot(app_routes, {useHash:true});

