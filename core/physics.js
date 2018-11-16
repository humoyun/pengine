var gEngine = gEngine || {};

gEngine.Physics = (function(){

  /**
   * to test the intersection of bounding circles 
   * between all objects in the mAllObjects list
   */
  var collision = function() {
    const _ = gEngine.Core;
    
    /**
     * 5 because we already have 5 rectangulars on game.js 
     * for other purposes 4 sides and a center
     */ 
    for (let i=5; i<_.mObjectStorage.length; i+=1) {
      for (let j=i+1; j<_.mObjectStorage.length; j+=1) {
        if (_.mObjectStorage[i].boundTest(_.mObjectStorage[j])) {
          _.mContext.strokeStyle = 'green';
          _.mObjectStorage[i].draw(_.mContext);
          _.mObjectStorage[j].draw(_.mContext);
        }
      }
    }

  }

  const mPublic = {
    collision
  };

  return mPublic;
}());

/**
 * It is always true that any interpenetration can be resolved 
 * by moving the colliding objects along the collision normal 
 * by the collision depth distance from the start to the end position.
 * 
 */