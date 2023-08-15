import { bootstrapApplication } from "@angular/platform-browser";

import { AppComponent } from "./app/app.component";
import { MIN_LOG_LEVEL } from "./app/logger.service";
import { LogLevel } from "./app/loglevel.enum";
import { isDevMode } from "@angular/core";

bootstrapApplication(AppComponent, {
  providers: [
    {
      provide: MIN_LOG_LEVEL,
      useValue: isDevMode() ? LogLevel.INFO : LogLevel.NEVER,
    },
  ],
});
