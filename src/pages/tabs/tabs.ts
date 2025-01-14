import { CountryPage } from './../countries/countries';
import { CategoriesPage } from "./../categories/categories";
import { Component } from "@angular/core";
import { AboutPage } from "../about/about";
import { HomePage } from "../home/home";

@Component({
  templateUrl: "tabs.html"
})
export class TabsPage {
  tab1Root = HomePage;
  tab2Root = CategoriesPage;
  tab3Root = CountryPage;
  tab4Root = AboutPage;

  constructor() {}
}
