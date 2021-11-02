import { CanvasComponent } from './canvas/canvas.component';
import { HeaderComponent } from './header/header.component';
import { LeftNavigationComponent } from './left-navigation/left-navigation.component';
import { PropertiesPaneComponent } from './properties-pane/properties-pane.component';

export * from './header/header.component';
export * from './left-navigation/left-navigation.component';
export * from './properties-pane/properties-pane.component';
export * from './canvas/canvas.component';



export const uiComponents = [HeaderComponent, LeftNavigationComponent, PropertiesPaneComponent, CanvasComponent];