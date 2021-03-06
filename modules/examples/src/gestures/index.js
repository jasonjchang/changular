import {bootstrap, Component, Template} from 'changular2/changular2';
import {reflector} from 'changular2/src/reflection/reflection';
import {ReflectionCapabilities} from 'changular2/src/reflection/reflection_capabilities';

@Component({selector: 'gestures-app'})
@Template({url: 'template.html'})
class GesturesCmp {
  swipeDirection: string;
  pinchScale: number;
  rotateAngle: number;

  constructor() {
    this.swipeDirection = '-';
    this.pinchScale = 1;
    this.rotateAngle = 0;
  }

  onSwipe(event) {
    this.swipeDirection = event.deltaX > 0 ? 'right' : 'left';
  }

  onPinch(event) {
    this.pinchScale = event.scale;
  }

  onRotate(event) {
    this.rotateAngle = event.rotation;
  }
}

export function main() {
  reflector.reflectionCapabilities = new ReflectionCapabilities();
  bootstrap(GesturesCmp);
}
