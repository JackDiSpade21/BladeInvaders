
gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI || {};

/**
 * Behavior generated from Timed Back and Forth Movement
 */
gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI = class TimedBackAndForthGGBOCELLI extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Vertical = behaviorData.Vertical !== undefined ? behaviorData.Vertical : false;
    this._behaviorData.Speed = behaviorData.Speed !== undefined ? behaviorData.Speed : Number("100") || 0;
    this._behaviorData.Distance = behaviorData.Distance !== undefined ? behaviorData.Distance : Number("200") || 0;
    this._behaviorData.Timeout = behaviorData.Timeout !== undefined ? behaviorData.Timeout : Number("2") || 0;
    this._behaviorData.StartPosition = Number("0") || 0;
    this._behaviorData.LastPosition = Number("0") || 0;
    this._behaviorData.Timecheck = Number("0") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Vertical !== newBehaviorData.Vertical)
      this._behaviorData.Vertical = newBehaviorData.Vertical;
    if (oldBehaviorData.Speed !== newBehaviorData.Speed)
      this._behaviorData.Speed = newBehaviorData.Speed;
    if (oldBehaviorData.Distance !== newBehaviorData.Distance)
      this._behaviorData.Distance = newBehaviorData.Distance;
    if (oldBehaviorData.Timeout !== newBehaviorData.Timeout)
      this._behaviorData.Timeout = newBehaviorData.Timeout;
    if (oldBehaviorData.StartPosition !== newBehaviorData.StartPosition)
      this._behaviorData.StartPosition = newBehaviorData.StartPosition;
    if (oldBehaviorData.LastPosition !== newBehaviorData.LastPosition)
      this._behaviorData.LastPosition = newBehaviorData.LastPosition;
    if (oldBehaviorData.Timecheck !== newBehaviorData.Timecheck)
      this._behaviorData.Timecheck = newBehaviorData.Timecheck;

    return true;
  }

  // Properties:
  
  _getVertical() {
    return this._behaviorData.Vertical !== undefined ? this._behaviorData.Vertical : false;
  }
  _setVertical(newValue) {
    this._behaviorData.Vertical = newValue;
  }
  _toggleVertical() {
    this._setVertical(!this._getVertical());
  }
  _getSpeed() {
    return this._behaviorData.Speed !== undefined ? this._behaviorData.Speed : Number("100") || 0;
  }
  _setSpeed(newValue) {
    this._behaviorData.Speed = newValue;
  }
  _getDistance() {
    return this._behaviorData.Distance !== undefined ? this._behaviorData.Distance : Number("200") || 0;
  }
  _setDistance(newValue) {
    this._behaviorData.Distance = newValue;
  }
  _getTimeout() {
    return this._behaviorData.Timeout !== undefined ? this._behaviorData.Timeout : Number("2") || 0;
  }
  _setTimeout(newValue) {
    this._behaviorData.Timeout = newValue;
  }
  _getStartPosition() {
    return this._behaviorData.StartPosition !== undefined ? this._behaviorData.StartPosition : Number("0") || 0;
  }
  _setStartPosition(newValue) {
    this._behaviorData.StartPosition = newValue;
  }
  _getLastPosition() {
    return this._behaviorData.LastPosition !== undefined ? this._behaviorData.LastPosition : Number("0") || 0;
  }
  _setLastPosition(newValue) {
    this._behaviorData.LastPosition = newValue;
  }
  _getTimecheck() {
    return this._behaviorData.Timecheck !== undefined ? this._behaviorData.Timecheck : Number("0") || 0;
  }
  _setTimecheck(newValue) {
    this._behaviorData.Timecheck = newValue;
  }
}

/**
 * Shared data generated from Timed Back and Forth Movement
 */
gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.SharedData = class TimedBackAndForthGGBOCELLISharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._TimedBackDESTRASINISTRA_TimedBackAndForthGGBOCELLISharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._TimedBackDESTRASINISTRA_TimedBackAndForthGGBOCELLISharedData = new gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.SharedData(
      initialData
    );
  }
  return instanceContainer._TimedBackDESTRASINISTRA_TimedBackAndForthGGBOCELLISharedData;
}

// Methods:
gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects4= [];


gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3[i].getY() < (gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStartPosition()) - (gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDistance()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3[i].isFlippedY() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStartPosition(Math.round((gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3[i].getPointY(""))));
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3[i].resetTimer("BacknForth_timeout");
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3[i].flipY(false);
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i].getY() > (gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStartPosition()) + (gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDistance()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i].isFlippedY()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStartPosition(Math.round((gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i].getPointY(""))));
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i].resetTimer("BacknForth_timeout");
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i].flipY(true);
}
}}

}


};gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3[i].timerElapsedTime("BacknForth_timeout", (gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTimeout())) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3[i].isFlippedY() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStartPosition(Math.round((gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3[i].getPointY(""))));
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3[i].resetTimer("BacknForth_timeout");
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3[i].flipY(false);
}
}}

}


{

/* Reuse gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i].timerElapsedTime("BacknForth_timeout", (gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTimeout())) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i].isFlippedY()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStartPosition(Math.round((gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i].getPointY(""))));
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i].resetTimer("BacknForth_timeout");
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i].flipY(true);
}
}}

}


};gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTimecheck() != (gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i].getTimerElapsedTimeInSeconds("BacknForth_timeout")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLastPosition() == Math.round((gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i].getPointY(""))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i].isFlippedY()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i].addForce(0, (gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed()), 0);
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i].isFlippedY() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i].addForce(0, -((gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed())), 0);
}
}}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLastPosition(Math.round((gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects1[i].getPointY(""))));
}
}}

}


};gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStartPosition() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i].resetTimer("BacknForth_timeout");
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStartPosition(Math.round((gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i].getPointY(""))));
}
}}

}


{


gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.eventsList3(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3[i].getX() > (gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStartPosition()) + (gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDistance()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3[i].isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStartPosition(Math.round((gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3[i].getPointX(""))));
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3[i].resetTimer("BacknForth_timeout");
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3[i].flipX(true);
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i].getX() < (gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStartPosition()) - (gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDistance()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i].isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStartPosition(Math.round((gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i].getPointX(""))));
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i].resetTimer("BacknForth_timeout");
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i].flipX(false);
}
}}

}


};gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3[i].timerElapsedTime("BacknForth_timeout", (gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTimeout())) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3[i].isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3[i].flipX(false);
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStartPosition(Math.round((gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3[i].getPointX(""))));
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3[i].resetTimer("BacknForth_timeout");
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i].timerElapsedTime("BacknForth_timeout", (gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTimeout())) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i].isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i].flipX(true);
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStartPosition(Math.round((gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i].getPointX(""))));
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i].resetTimer("BacknForth_timeout");
}
}}

}


};gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.eventsList6(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i].isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i].addForce(-((gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed())), 0, 0);
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i].isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i].addForce((gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed()), 0, 0);
}
}}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLastPosition(Math.round((gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects1[i].getPointX(""))));
}
}}

}


};gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.eventsList9 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStartPosition() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i].resetTimer("BacknForth_timeout");
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStartPosition(Math.round((gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2[i].getPointX(""))));
}
}}

}


{


gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.eventsList5(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.eventsList7(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.eventsList8(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.eventsList10 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTimecheck((gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects1[i].getTimerElapsedTimeInSeconds("BacknForth_timeout")));
}
}}

}


};gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.eventsList11 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getVertical() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getVertical()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.eventsList9(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.eventsList10(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;

gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI.prototype.doStepPreEventsContext.eventsList11(runtimeScene, eventsFunctionContext);

return;
}


gdjs.registerBehavior("TimedBackDESTRASINISTRA::TimedBackAndForthGGBOCELLI", gdjs.evtsExt__TimedBackDESTRASINISTRA__TimedBackAndForthGGBOCELLI.TimedBackAndForthGGBOCELLI);
