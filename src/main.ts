import {
  EnvironmentProviders,
  isDevMode,
  makeEnvironmentProviders,
} from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";

import { AppComponent } from "./app/app.component";
import {
  ConsoleProvider,
  TimedConsoleProvider,
} from "./app/logger-provider.service";
import { LOGGER_PROVIDERS, MIN_LOG_LEVEL } from "./app/logger.service";
import { LogLevel } from "./app/loglevel.enum";

function registerLoggerProviders(): EnvironmentProviders {
  return makeEnvironmentProviders(
    isDevMode()
      ? [
          {
            provide: LOGGER_PROVIDERS,
            useClass: ConsoleProvider,
            multi: true,
          },
          {
            provide: LOGGER_PROVIDERS,
            useClass: TimedConsoleProvider,
            multi: true,
          },
        ]
      : []
  );
}

bootstrapApplication(AppComponent, {
  providers: [
    registerLoggerProviders(),
    {
      provide: MIN_LOG_LEVEL,
      useValue: isDevMode() ? LogLevel.INFO : LogLevel.NEVER,
    },
  ],
});
function makeEnvironmentProvider(arg0: never[]) {
  throw new Error("Function not implemented.");
}
