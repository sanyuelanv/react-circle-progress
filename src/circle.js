'use strict'
import React,{Component} from 'react'
class Circle extends Component {
  constructor(props){
		super(props)
    this.size = this.props.size || 200
    this.sw = this.props.strokeWidth || 10
    this.r = this.props.radius || 95
    this.pbc = this.props.progressColor || "#249fff"
    this.bbc = this.props.bottomColor || "#cccccc"
    this.pbf = this.props.progressFillColor || "transparent"
    this.bbf = this.props.bottomFillColor || "transparent"
    this.time = this.props.time || 0.5
    this.allLength = Math.PI * 2 * this.r
    this.startPoint = this.props.startPoint-90 || -90
    this.gradientDirection = this.props.gradientDirection || "vertical"
    this.showText = this.props.showText == false ? this.props.showText : true
    this.textStyle = this.props.textStyle || {size:12,color:"#555",type:0}
    this.linecap = this.props.linecap || "square"
	}
  _renderLinearGradient(){
    let {gradient,} = this.props
    if(!gradient) return
    let arr = gradient.map((item,index)=>{
      let {offset,color,opacity} = item
      return (<stop offset={offset+"%"} key={index} style={{stopColor:color,stopOpacity:opacity}}/>)
    })
    return(
      <defs>
        <linearGradient
          id="sanyuelanvGradient"
          x1="0%" y1="0%"
          x2={this.gradientDirection == "horizontal"?"0%" : "100%"} y2={this.gradientDirection == "vertical"?"0%" : "100%"}
        >
          {arr}
        </linearGradient>
      </defs>
    )
  }
  _renderText(current){
    if(!this.showText)return
    let {color,size,type} = this.textStyle
    let res = current
    if(type == 0){res = parseInt(current*100) + "%"}
    else if(type == 1){res = current}
    else if(type == 2){res = parseInt(current*100)}
    return(
      <text x="50%" y="50%" dy={size/2} textAnchor="middle" style={{fontSize:size+'px',fill:color}}>{res}</text>
    )
  }
  render() {
    let {current,gradient} = this.props
    current = current.toFixed(2)
    current = current >= 1 ? 1 : current
    return (
      <svg viewBox={"0 0 "+this.size+" " +this.size} width={this.size} height={this.size} version="1.1">
        {this._renderLinearGradient()}
        <circle r={this.r} cx={this.size/2} cy={this.size/2} style={{stroke:this.bbc,fill:this.bbf,strokeWidth:this.sw,}}></circle>
        <circle r={this.r} cx={this.size/2} cy={this.size/2}
          transform={"rotate("+this.startPoint+","+ this.size/2 +", "+ this.size/2 +")"}
          style={{
            transition: "all "+this.time+"s linear",
            WebkitTransition: "all "+this.time+"s linear",
            strokeDashoffset: this.allLength * (1-current),
            strokeDasharray: this.allLength,
            strokeLinecap:this.linecap,
            stroke:gradient?"url('#sanyuelanvGradient')":this.pbc,
            fill:this.pbf,
            strokeWidth:this.sw,
          }}
        >
        </circle>
        {this._renderText(current)}
      </svg>
    )
  }
}
export default Circle
