import { __extends } from '@garfish/utils';

__extends(MouseEventPatch, MouseEvent);

export function MouseEventPatch(
  typeArg: string,
  mouseEventInit?: MouseEventInit,
): void {
  if (
    mouseEventInit &&
    Object.prototype.toString.call(mouseEventInit.view) === '[object Window]'
  ) {
    mouseEventInit.view = window;
  }
  return new MouseEvent(typeArg, mouseEventInit) as any;
}

export function UiEventOverride() {
  return {
    override: {
      MouseEvent: MouseEventPatch as any,
    },
  };
}
