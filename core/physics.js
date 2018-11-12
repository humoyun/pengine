var gEngine = gEngine || {};

gEngine.Physics = (function(){

  var collision = function() {
    const _ = gEngine.Core;

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