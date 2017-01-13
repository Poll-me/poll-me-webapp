export class User {

  public id: string;
  public name: string;
  public email: string;
  public photoUrl: string;

  constructor(
    data?
  ) {
    if (data) {
      Object.assign(this, data);
    }
  }
}
