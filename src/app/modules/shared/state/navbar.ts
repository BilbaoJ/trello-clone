import { signal, WritableSignal } from "@angular/core";
import { Colors } from "@shared/models/colors.model";

export const backGroundColor : WritableSignal<Colors> = signal<Colors>('white');
export const logoColor : WritableSignal<Colors> = signal<Colors>('neutral');
