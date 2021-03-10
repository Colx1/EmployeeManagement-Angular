import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { InsertcompanyComponent } from './Components/insert/insertcompany/insertcompany.component';
import { InsertbrandComponent } from './Components/insert/insertbrand/insertbrand.component';
import { InsertproductComponent } from './Components/insert/insertproduct/insertproduct.component';
import { ListcompanyComponent } from './Components/list/listcompany/listcompany.component';
import { ListbrandComponent } from './Components/list/listbrand/listbrand.component';
import { ListproductComponent } from './Components/list/listproduct/listproduct.component';
import { InsertComponent } from './Components/insert/insert/insert.component';
import { ListComponent } from './Components/list/list/list.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';
import { EditcompanyComponent } from './Components/edit/editcompany/editcompany.component';
import { EditbrandComponent } from './Components/edit/editbrand/editbrand.component';
import { EditproductComponent } from './Components/edit/editproduct/editproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InsertcompanyComponent,
    InsertbrandComponent,
    InsertproductComponent,
    ListcompanyComponent,
    ListbrandComponent,
    ListproductComponent,
    InsertComponent,
    ListComponent,
    PageNotFoundComponent,
    EditcompanyComponent,
    EditbrandComponent,
    EditproductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/home',  pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'insert', component: InsertComponent},
      {path: 'list', component: ListComponent},

      {path: 'editbrand/:id', component: EditbrandComponent},
      {path: 'editcompany/:id', component: EditcompanyComponent},
      {path: 'editproduct/:id', component: EditproductComponent},

      {path: '**', component: PageNotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
