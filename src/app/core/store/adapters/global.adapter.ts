import { Mutator } from '@core/utils/mutator.util';

export interface AdapterUi {
  name: string;
  value: boolean | string;
}

export class GlobalAdapter {

  static setUi(payload: Array<AdapterUi>, state) {
    const ui = Mutator.copy(state.ui);
    payload.forEach( ({ name, value}) => ui[`${name}`] = value);
    return { ...state, ui };
  }
}
