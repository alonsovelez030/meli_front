export class Mutator {
    static copy(obj) {
        let result;
        if (obj instanceof Array) {
          result = [ ...obj ];
        } else if (obj instanceof Object) {
          result = {...obj};
        } else {
          return obj;
        }
        for (const prop of Reflect.ownKeys(result)) {
          result[ prop ] = this.copy (result[ prop ]);
        }
        return result;
    }
}
