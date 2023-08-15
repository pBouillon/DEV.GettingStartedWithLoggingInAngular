import { Injectable } from "@angular/core";

export interface LoggerProvider {
  info(template: string, ...optionalParams: any[]): void;
  warning(template: string, ...optionalParams: any[]): void;
  error(template: string, ...optionalParams: any[]): void;
}

@Injectable()
export class ConsoleProvider implements LoggerProvider {
  info(template: string, ...optionalParams: any[]): void {
    console.log(template, ...optionalParams);
  }

  warning(template: string, ...optionalParams: any[]): void {
    console.warn(template, ...optionalParams);
  }

  error(template: string, ...optionalParams: any[]): void {
    console.error(template, ...optionalParams);
  }
}

@Injectable()
export class TimedConsoleProvider implements LoggerProvider {
  #withDate(template: string): string {
    return `${new Date().toLocaleTimeString()} | ${template}`;
  }

  info(template: string, ...optionalParams: any[]): void {
    console.log(this.#withDate(template), ...optionalParams);
  }

  warning(template: string, ...optionalParams: any[]): void {
    console.warn(this.#withDate(template), ...optionalParams);
  }

  error(template: string, ...optionalParams: any[]): void {
    console.error(this.#withDate(template), ...optionalParams);
  }
}
