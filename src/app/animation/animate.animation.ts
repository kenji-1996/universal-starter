import {
    trigger,
    style,
    animate,
    transition
} from '@angular/animations';

export const fadeAnimate = trigger('fadeInOut', [
    transition(':enter', [   // :enter is alias to 'void => *'
        style({ opacity: 0 }),
        animate(300, style({ opacity: 1 }))
    ]),
    transition(':leave', [   // :leave is alias to '* => void'
        animate(300, style({ opacity: 0 }))
    ])
]);
