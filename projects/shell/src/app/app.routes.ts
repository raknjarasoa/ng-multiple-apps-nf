import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'hello',
    loadComponent: () =>
      loadRemoteModule('mfe1', './Component').then((m) => m.AppComponent),
  },
  //   {
  //     path: 'rrrrr',
  //     loadChildren: () =>
  //       loadRemoteModule('mfe1', './routes').then((m) => m.APP_ROUTES),
  //   },
];

// export const APP_ROUTES: Routes = [
//   {
//     path: '',
//     redirectTo: 'flights',
//     pathMatch: 'full',
//   },
//   {
//     path: 'flight-search',
//     component: FlightComponent,
//   },
//   {
//     path: 'holiday-packages',
//     component: HolidayPackagesComponent,
//   },
// ];
