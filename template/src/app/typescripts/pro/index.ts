import { ModuleWithProviders, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AutocompleteModule } from './autocomplete/ng2-completer.module';
import { CardsModule } from './cards/';
import { FileInputModule } from './file-input/';
import { MaterialChipsModule } from './tags/';
import { ProgressBars } from './progressbars/';
import { TabsModule } from './tabs-pills/';
import { SelectModule } from './material-select/';
import { DatepickerModule } from './date-picker/';
import { TimePickerModule } from './time-picker/';
import { SidenavModule } from './sidenav/';
import { ChartSimpleModule } from './easy-charts/';
import { AccordionModule } from './accordion/';
import { StickyContentModule } from './sticky-content/';
import { SmoothscrollModule } from './smoothscroll/index';
import { CharCounterModule } from './inputs/';

export {
  AutocompleteModule, CompleterComponent, CompleterListItemComponent, CompleterService, LocalDataFactoryProvider,
  RemoteDataFactoryProvider, MdbCompleterDirective, MdbDropdownDirective, MdbInputCompleteDirective, MdbListDirective, MdbRowDirective
} from './autocomplete/index';

export {
  CardsModule, CardRotatingComponent, CardRevealComponent
} from './cards/';

export {

  ProgressbarComponent, ProgressbarConfigComponent, ProgressbarModule, ProgressBars, ProgressDirective,
  ProgressSpinnerComponent, BarComponent
} from './progressbars/';

export {
  MaterialChipsComponent, MaterialChipsModule
} from './tags/';

export {
  TabDirective, TabHeadingDirective, TabsetComponent, TabsetConfig, TabsModule, NgTranscludeDirective
} from './tabs-pills/';

export {
  MDBSpinningPreloader
} from './preloader/preloader.service';

// export {
//   ToastComponent, ToastContainerDirective, ToastContainerModule, ToastInjector, ToastPackage, ToastRef, ToastIconClasses,
//   ToastModule, ToastService, GlobalConfig, IndividualConfig, Overlay, OVERLAY_PROVIDERS, OverlayContainer, OverlayRef
// } from './alerts/';

export {
  SelectModule, Diacritics, Option, OptionList, IOption, SELECT_VALUE_ACCESSOR, SelectComponent, SelectDropdownComponent
} from './material-select/';

export {
  MDBDatePickerComponent, DatepickerModule, IMyCalendarDay, IMyCalendarViewChanged, IMyDate, IMyDateModel, IMyDateRange,
  IMyDayLabels, IMyInputAutoFill, IMyInputFieldChanged, IMyInputFocusBlur, IMyLocales, IMyMarkedDate, IMyMarkedDates,
  IMyMonth, IMyMonthLabels, IMyOptions, IMyWeek, IMyWeekday, InputAutoFillDirective, MYDP_VALUE_ACCESSOR, UtilService,
  LocaleService, FocusDirective
} from './date-picker/';

export {
  TimePickerModule, ClockPickerComponent
} from './time-picker/';

export {
  SidenavComponent, SidenavModule
} from './sidenav/';

export {
  ChartSimpleModule, EasyPieChartComponent, SimpleChartComponent
} from './easy-charts/';

export {
  SBItemComponent, SBItemBodyComponent, SBItemHeadComponent, SqueezeBoxComponent, AccordionModule
} from './accordion/';

export {
  MdbStickyDirective, StickyContentModule
} from './sticky-content/';

export {
  SmoothscrollModule, PageScrollDirective, PageScrollConfig, PageScrollingViews, PageScrollInstance, PageScrollService,
  PageScrollTarget, PageScrollUtilService, EasingLogic
} from './smoothscroll/';

export {
  CharCounterDirective, CharCounterModule
} from './inputs';

export {
  MDBFileDropDirective, MDBFileSelectDirective, FileInputModule, MDBUploaderService, UploadFile, UploadOutput,
  UploadInput, humanizeBytes
} from './file-input';

const MODULES = [
  AutocompleteModule,
  CardsModule,
  FileInputModule,
  MaterialChipsModule,
  ProgressBars,
  TabsModule,
  SelectModule,
  DatepickerModule,
  TimePickerModule,
  SidenavModule,
  ChartSimpleModule,
  AccordionModule,
  StickyContentModule,
  SmoothscrollModule,
  CharCounterModule
];

@NgModule({
  imports: [
    AutocompleteModule,
    CardsModule.forRoot(),
    MaterialChipsModule,
    ProgressBars.forRoot(),
    TabsModule.forRoot(),
    SelectModule,
    DatepickerModule,
    TimePickerModule,
    SidenavModule,
    ChartSimpleModule,
    AccordionModule,
    StickyContentModule,
    SmoothscrollModule.forRoot(),
    CharCounterModule.forRoot()
  ],
  exports: MODULES,
  providers: [
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class MDBRootModulePro {
}

@NgModule({ exports: MODULES })
export class MDBBootstrapModulePro {
  public static forRoot(): ModuleWithProviders {
    return { ngModule: MDBRootModulePro };
  }
}
