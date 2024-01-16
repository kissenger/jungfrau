import { RouteReuseStrategy, ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';

export class CustomRouteReuseStrategy implements RouteReuseStrategy {

  private routeStore = new Map<string, DetachedRouteHandle>();

  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return false;
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    this.routeStore.set(route.routeConfig?.path!, handle);
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    //@ts-ignore
    return this.routeStore.get(route.routeConfig?.path!);

  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return this.routeStore.has(route.routeConfig?.path!);
  }

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return true;
  }

  deleteRouteSnapshot(path: string): void {
    this.routeStore.delete(path);
  }
}
