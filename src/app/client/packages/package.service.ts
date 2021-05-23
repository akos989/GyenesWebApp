import {Injectable} from '@angular/core';
import {Package} from 'src/app/shared/models/package.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map, tap, catchError} from 'rxjs/operators';
import {throwError, Subject} from 'rxjs';
import {ErrorHandleService} from 'src/app/shared/error-handle.service';
import {PackageType} from 'src/app/shared/models/package-type.model';
import {environment} from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class PackageService {
  packages: PackageType[] = [];
  allPackageTypes: PackageType[] = [];
  packagesChanged = new Subject<void>();

  constructor(private http: HttpClient, private errorHandler: ErrorHandleService) {
  }

  loadFromBackend() {
    return this.http
      .get<{ types: PackageType[] }>(environment.serverUrl + 'api/packages_type/')
      .pipe(
        map((responseData) => {
          responseData.types.map(type => {
            type.packages.sort(this.packageComparator);
          });
          return responseData.types;
        }),
        tap(packageTypes => {
          this.allPackageTypes = packageTypes;
          this.packages =
            packageTypes.filter(type => {
              return (type.packages.filter(p => {
                return !p.disabled;
              }).length > 0);
            }).map(type => {
              type.packages = type.packages.filter(p => {
                return !p.disabled;
              });
              return type;
            });
        }),
        catchError((errorRes: { error: { error: { error: string, message: any } } }) => {
          if (errorRes.error) {
            this.errorHandler.newError(errorRes.error.error);
          } else {
            const error = {error: 'Unknown error', message: ''};
            this.errorHandler.newError(error);
          }
          return throwError(errorRes);
        })
      );
  }

  deletePackage(ids: string[], typeId: string) {
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        ids: ids,
        packageTypeId: typeId
      },
    };
    this.http.delete(environment.serverUrl + 'api/packages/', options)
      .subscribe(
        resData => {
          this.allPackageTypes = this.allPackageTypes.map(type => {
            type.packages = type.packages.filter(p => {
              return !ids.some(id => id === p._id);
            });
            return type;
          });
          this.packagesChanged.next();
        },
        (errorRes: { error: { error: { error: string, message: any } } }) => {
          this.errorHandler.newError(errorRes.error.error);
        }
      );
  }

  updatePackage(formData: any, id: string) {
    return this.http.patch<Package>(environment.serverUrl + 'api/packages/' + id, formData)
      .pipe(
        tap(resData => {
          this.allPackageTypes = this.allPackageTypes.map(type => {
            type.packages = type.packages.map(p => {
              if (p._id === id) {
                p = resData;
              }
              return p;
            });
            return type;
          });
          this.packagesChanged.next();
        }),
        catchError((errorRes: { error: { error: { error: string, message: any } } }) => {
          if (errorRes.error) {
            this.errorHandler.newError(errorRes.error.error);
          } else {
            const error = {error: 'Unknown error', message: ''};
            this.errorHandler.newError(error);
          }
          return throwError(errorRes);
        })
      );
  }

  createPackage(formData: any, typeId: string) {
    return this.http.post<PackageType>(environment.serverUrl + 'api/packages/', formData)
      .pipe(
        tap(resData => {
          this.allPackageTypes = this.allPackageTypes.map(type => {
            if (type.id === typeId) {
              type = resData;
            }
            return type;
          });
          this.packagesChanged.next();
        }),
        catchError((errorRes: { error: { error: { error: string, message: any } } }) => {
          if (errorRes.error) {
            this.errorHandler.newError(errorRes.error.error);
          } else {
            const error = {error: 'Unknown error', message: ''};
            this.errorHandler.newError(error);
          }
          return throwError(errorRes);
        })
      );
  }

  createType(name: string, sale: boolean) {
    return this.http.post<PackageType>(environment.serverUrl + 'api/packages_type',
      {
        name: name,
        sale: sale
      }
    ).pipe(
      tap(resData => {
        this.allPackageTypes.push(resData);
        this.packagesChanged.next();
      }),
      catchError((errorRes: { error: { error: { error: string, message: any } } }) => {
        if (errorRes.error) {
          this.errorHandler.newError(errorRes.error.error);
        } else {
          const error = {error: 'Unknown error', message: ''};
          this.errorHandler.newError(error);
        }
        return throwError(errorRes);
      })
    );
  }

  updateType(name: string, sale: boolean, id: string) {
    return this.http.patch<PackageType>(environment.serverUrl + 'api/packages_type/' + id,
      {
        name: name,
        sale: sale
      }
    ).pipe(
      tap(resData => {
        this.allPackageTypes = this.allPackageTypes.map(type => {
          if (type.id === id) {
            type = resData;
          }
          return type;
        });
        this.packagesChanged.next();
      }),
      catchError((errorRes: { error: { error: { error: string, message: any } } }) => {
        if (errorRes.error) {
          this.errorHandler.newError(errorRes.error.error);
        } else {
          const error = {error: 'Unknown error', message: ''};
          this.errorHandler.newError(error);
        }
        return throwError(errorRes);
      })
    );
  }

  deleteType(id: string) {
    return this.http.delete<PackageType>(environment.serverUrl + 'api/packages_type/' + id)
      .pipe(
        tap(resData => {
          this.allPackageTypes = this.allPackageTypes.filter(type => {
            return type.id !== id;
          });
          this.packagesChanged.next();
        }),
        catchError((errorRes: { error: { error: { error: string, message: any } } }) => {
          if (errorRes.error) {
            this.errorHandler.newError(errorRes.error.error);
          } else {
            const error = {error: 'Unknown error', message: ''};
            this.errorHandler.newError(error);
          }
          return throwError(errorRes);
        })
      );
  }

  findType(id: string): PackageType {
    for (const type of this.packages) {
      for (const p of type.packages) {
        if (p._id === id) {
          return type;
        }
      }
    }
    return null;
  }

  returnType(id: string): PackageType {
    return this.allPackageTypes.filter(type => {
      return type.id === id;
    })[0];
  }

  findById(id: string): Package {
    for (const type of this.packages) {
      for (const p of type.packages) {
        if (p._id === id) {
          return p;
        }
      }
    }
    return null;
  }

  private packageComparator(pA: Package, pB: Package) {
    if (pA.fromNumberLimit < pB.fromNumberLimit) {
      return -1;
    }
    if (pA.fromNumberLimit > pB.fromNumberLimit) {
      return 1;
    }
    if (pA.fromNumberLimit === pB.fromNumberLimit) {
      if (pA.toNumberLimit < pB.toNumberLimit) {
        return -1;
      }
      if (pA.toNumberLimit > pB.toNumberLimit) {
        return 1;
      }
    }
    return 0;
  }
}
