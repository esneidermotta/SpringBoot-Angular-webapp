import { Pipe, PipeTransform } from '@angular/core';
import { filter, map, Observable, of } from 'rxjs';
import { User } from '../interface/user';
import { UserService } from '../service/user.service';

@Pipe({
  name: 'userIdToName'
})
export class UserIdToNamePipe implements PipeTransform {

  constructor(private userService: UserService) {}

  transform(id: string): Observable<string | undefined> {
    if (!id) {
      return of(undefined);
    }

    return this.userService.getUser(id).pipe(
      filter(user => user != null && user != undefined),
      map(user => { return user.fullname; })
    );
  }

}
