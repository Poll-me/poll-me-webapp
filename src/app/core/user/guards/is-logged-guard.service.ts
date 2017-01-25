import { UserService }      from '../';
import { UserGuard } from './user-guard.service';

export class IsLoggedGuard extends UserGuard {

  protected readonly fallbackRoute: any[] = ['/user/login'];

  protected checkUser(userService: UserService): boolean {
    return userService.isLogged;
  }
}
