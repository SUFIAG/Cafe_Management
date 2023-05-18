export class GlobalConstants {
  public static genericError: string =
    'Something went wrong!! PLease try again!!';

  public static unauthorized: string =
    'You are not authorized to view this page!';

  public static productExistError: string = 'Product already exists';

  public static productAdded: string = 'Product added successfully';
  

  public static nameRegex: string = '[a-zA-Z0-9 ]*';

  public static emailRegex: string =
    '[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}';

  public static contactNumberRegex: string = '^[e0-9]{10,10}$';

  public static error: string = 'error';
}
