import Draw from './L.PM.Draw';

Draw.Circle = Draw.CircleMarker.extend({
  initialize(map) {
    this._map = map;
    this._shape = 'Circle';
    this.toolbarButtonName = 'drawCircle';
    this._BaseCircleClass = L.Circle;
    this._minRadiusOption = 'minRadiusCircle';
    this._maxRadiusOption = 'maxRadiusCircle';
    this._editableOption = 'resizableCircle';
    this._defaultRadius = 100;
  },
  _extendingEnable() {
    this._map.on('mousemove', this._showMeasurement, this); // @ttungbmt
  },
  _extendingDisable() {
    this._map.off('mousemove', this._showMeasurement, this); // @ttungbmt
  },
  _extendingCreateMarker() {},
  isRelevantMarker() {},
  _getMinDistanceInMeter() {
    return this.options[this._minRadiusOption];
  },
  _getMaxDistanceInMeter() {
    return this.options[this._maxRadiusOption];
  },
  _distanceCalculation(A, B) {
    return this._map.distance(A, B);
  },
  // @ttungbmt
  _showMeasurement(e){
    if(this._layer.getRadius() <= 0) return null;

    const positionMarker = this._layer.getLatLng();
    const positionMarkerText = [positionMarker.lat.toFixed(6), positionMarker.lng.toFixed(6)].join(', ');

    const radius = this._layer.getRadius();
    const radiusText = (radius > 1000) ? (radius/1000).toFixed(2) + ' km' : radius.toFixed(0) + ' m';

    let tooltipContent = getTranslation('tooltips.finishCircle');

    tooltipContent += `</br><b>${getTranslation('measurementTooltips.centerPostision') || 'Center position'}:</b> ${positionMarkerText}`;
    tooltipContent += `</br><b>${getTranslation('measurementTooltips.radius') || 'Radius'}:</b> ${radiusText}`;

    this._hintMarker.setTooltipContent(tooltipContent);
  }
});
