import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { SummaryService } from './summary.service';
import { TaxData } from '../model/tax-data-model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FlowGuard implements CanActivate {
  constructor(private router: Router, private summaryService: SummaryService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.summaryService.objTaxData$.pipe(
      map((value: TaxData) => {
        const emptyOrZeroProperties = Object.keys(value).filter((key) => {
          return (value as any)[key] === '' || (value as any)[key] === 0;
        });

        if (emptyOrZeroProperties.length === 0) {
          return true;
        } else {
          this.router.navigate(['']);
          return false;
        }
      })
    );
  }
}
