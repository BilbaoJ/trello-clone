import { signal, WritableSignal } from "@angular/core";
import { Colors } from "@shared/models/colors.model";

export const backGroundColor : WritableSignal<Colors> = signal('white');
export const logoColor : WritableSignal<Colors> = signal('neutral');
