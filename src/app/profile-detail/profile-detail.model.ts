export interface IProfileDetailModel {
  Name?: any;
  Country?: any;
  Phone?: any;
  Companies?: any;

}

export class ProfileDetailModel implements IProfileDetailModel {
  constructor(

    public Name?:any,
    public Country?: any,
    public Phone?: any,
    public Companies?: any

  ){

  }
}
