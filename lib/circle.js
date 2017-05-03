'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';

var Circle = function (_Component) {
  _inherits(Circle, _Component);

  function Circle(props) {
    _classCallCheck(this, Circle);

    var _this = _possibleConstructorReturn(this, (Circle.__proto__ || Object.getPrototypeOf(Circle)).call(this, props));

    _this.size = _this.props.size || 200;
    _this.sw = _this.props.strokeWidth || 10;
    _this.r = _this.props.radius || 95;
    _this.pbc = _this.props.progressColor || "#249fff";
    _this.bbc = _this.props.bottomColor || "#cccccc";
    _this.pbf = _this.props.progressFillColor || "transparent";
    _this.bbf = _this.props.bottomFillColor || "transparent";
    _this.time = _this.props.time || 0.5;
    _this.allLength = Math.PI * 2 * _this.r;
    _this.startPoint = _this.props.startPoint - 90 || -90;
    _this.gradientDirection = _this.props.gradientDirection || "vertical";
    return _this;
  }

  _createClass(Circle, [{
    key: '_renderLinearGradient',
    value: function _renderLinearGradient() {
      var gradient = this.props.gradient;

      if (!gradient) return;
      var arr = gradient.map(function (item, index) {
        var offset = item.offset,
            color = item.color,
            opacity = item.opacity;

        return React.createElement('stop', { offset: offset + "%", key: index, style: { stopColor: color, stopOpacity: opacity } });
      });
      return React.createElement(
        'defs',
        null,
        React.createElement(
          'linearGradient',
          {
            id: 'sanyuelanvGradient',
            x1: '0%', y1: '0%',
            x2: this.gradientDirection == "horizontal" ? "0%" : "100%", y2: this.gradientDirection == "vertical" ? "0%" : "100%"
          },
          arr
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          current = _props.current,
          gradient = _props.gradient;

      current = current.toFixed(2);
      current = current >= 1 ? 1 : current;
      return React.createElement(
        'svg',
        { viewBox: "0 0 " + this.size + " " + this.size, width: this.size, height: this.size, version: '1.1' },
        this._renderLinearGradient(),
        React.createElement('circle', { r: this.r, cx: this.size / 2, cy: this.size / 2, style: { stroke: this.bbc, fill: this.bbf, strokeWidth: this.sw } }),
        React.createElement('circle', { r: this.r, cx: this.size / 2, cy: this.size / 2,
          transform: "rotate(" + this.startPoint + "," + this.size / 2 + ", " + this.size / 2 + ")",
          style: {
            transition: "all " + this.time + "s linear",
            WebkitTransition: "all " + this.time + "s linear",
            strokeDashoffset: this.allLength * (1 - current),
            strokeDasharray: this.allLength,
            stroke: gradient ? "url('#sanyuelanvGradient')" : this.pbc,
            fill: this.pbf,
            strokeWidth: this.sw
          }

        }),
        React.createElement(
          'text',
          { x: '50%', y: '50%', dy: '.35em', textAnchor: 'middle' },
          parseInt(current * 100) + "%"
        )
      );
    }
  }]);

  return Circle;
}(Component);

export default Circle;