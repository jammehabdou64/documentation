import { loadRoute } from "jcc-express-mvc";
import { ServiceProvider } from "jcc-express-mvc/lib/Services/ServiceProvider";

export class RouteServiceProvider extends ServiceProvider {
  //
  static HOME: string = "/home";
  //
  constructor(app: any) {
    super(app);
  }

  public register(): void {
    //
  }

  public boot(): void {
    loadRoute("api");
    loadRoute("web");
  }
}
