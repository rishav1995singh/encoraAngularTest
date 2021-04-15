export interface IRegisterDetailModel {
  firstName?: any;
  lastName?: any;
  contactNumber?: any;
  address?: any;
  email?: any;
  pincode?: any;

}

export class RegisterDetailModel implements IRegisterDetailModel {
  constructor(

   public firstName?: any,
   public lastName?: any,
   public contactNumber?: any,
   public address?: any,
   public email?: any,
   public pincode?: any

  ){

  }
}
