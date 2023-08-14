import { Injectable, isDevMode } from "@angular/core";

@Injectable({ providedIn: "root" })
export class LoggerService {
  #withDate(template: string): string {
    return `${new Date().toLocaleTimeString()} | ${template}`;
  }

  info(template: string, ...optionalParams: any[]): void {
    if (!isDevMode()) return;
    console.log(this.#withDate(template), ...optionalParams);
  }

  warning(template: string, ...optionalParams: any[]): void {
    console.warn(this.#withDate(template), ...optionalParams);
  }

  error(template: string, ...optionalParams: any[]): void {
    console.error(this.#withDate(template), ...optionalParams);
  }
}
