import { UserService }      from '../';
import { UserGuard } from './user-guard.service';

export class IsNotLoggedGuard extends UserGuard {

  protected readonly fallbackRoute: any[] = ['/user'];

  protected checkUser(userService: UserService): boolean {
    return !userService.isLogged;
  }
}
