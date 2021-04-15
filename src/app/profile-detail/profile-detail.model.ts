export interface IProfileDetailModel {
  first_name?: any;
  last_name?: any;
  email?: any;
  avatar?: any;

}

export class ProfileDetailModel implements IProfileDetailModel {
  constructor(

    public first_name?:any,
    public last_name?: any,
    public email?: any,
    public avatar?: any

  ){

  }
}
